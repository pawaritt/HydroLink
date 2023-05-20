from django.shortcuts import render
from django.db.models import Prefetch
from rest_framework import viewsets
from rest_framework import response
from river.models import River, Spot, DailySpotData, SpotData
from river.serializers import SpotDataSerializer
import datetime
import json
from river_model.coordinates import RIVERS, BASE_RIVER
from river_model.object import Coordinate
from pickle import load
from twilio.rest import Client
from datetime import date

import pandas as pd
from django.db.models import Prefetch
from satellite.map import DEMFile


account_sid = "AC59bfc33f4bbff7b56419d430124861c4"
auth_token = "3812a97c3484000c0e7d4f7c8f234cd8"
client = Client(account_sid, auth_token)

surface = DEMFile()

spoint = surface.calculate_spred(3)
today = None
class RiverViewSet(viewsets.ViewSet):
    def retrieve(self, request):
        global today
        global spoint
        code = 'chaopraya'
        river = River.objects.prefetch_related(
            Prefetch(
                'spot', 
                queryset=Spot.objects.prefetch_related(
                    Prefetch(
                        'dailydata',
                        queryset=DailySpotData.objects.order_by('collected_date'),
                        to_attr='datas'
                    )
                ), 
                to_attr='spots'
                )
            ).get(code=code)
        spotdata = [{
            'name': spot.name,
            'code': spot.code,
            'lat': spot.latitude,
            'lon': spot.longtitude,
            'waterlevel': spot.predicted_waterlevel if len(spot.datas) > 0 else 0,
            'salinity': {
                'a': [s.salinity for s in spot.datas[::-1][:31][::-1][1:]],
                'p': [round(s.predictvalue, 2) for s in spot.datas[::-1][:31][::-1]]
                },
            'waterlevel': {
                'a': [s.waterlevel for s in spot.datas[::-1][:31][::-1][:-1]],
                'p': [round(s.predictvalue2, 2) for s in spot.datas[::-1][:31][::-1]]
                },
            } for spot in river.spots]
        # spoint = []
        if today != date.today():
            spoint = surface.calculate_spred(0)
            today = date.today()
        # spoint = []
        # print([format(o,'.2f') for o in salmodel.predict_river()])
        return render(request=request, template_name='river-dashboard.html', context={
            'data': {
                'stopnum': 200,
                # 'river': json.dumps([format(o,'.2f') for o in salmodel.predict_river()]),
                # 'river': json.dumps(['23', '23', '0.26', '0.1', '0.1', '0.12']),
                'river': json.dumps(['0.1', '0.1', '0.16', '0.1', '0.1', '0.12']),
                'spots': spotdata,
                'spread_point': spoint
                },
            'river': {
                'name': river.name
            }
        })

class SpotViewSet(viewsets.ViewSet):
    def retrieve(self, request, code):
        spot = Spot.objects.prefetch_related(
                Prefetch(
                    'dailydata',
                    queryset=DailySpotData.objects.filter(collected_date__gte=datetime.datetime.today() - datetime.timedelta(days=7)).order_by('collected_date'),
                    to_attr='datas'
                ), Prefetch(
                    'dailydata',
                    queryset=DailySpotData.objects.filter(collected_date__day='1', collected_date__gte=datetime.datetime.today() - datetime.timedelta(days=365)).order_by('collected_date'),
                    to_attr='monthly_datas'
                )
            ).get(code=code)
        spotdata = DailySpotData.objects.filter(spot__code=code).order_by('collected_date')[:1]
        return render(request=request, template_name='spot-dashboard.html', context={
            'data': {
                'srnumber': spot.serial_number, 
                'daily': json.dumps(SpotDataSerializer(spot.datas, many=True).data),
                'monthly': json.dumps(SpotDataSerializer(spot.monthly_datas, many=True).data),
            } ,
            'spot': {
                'name': spot.name,
                'predsalinity': "{:.2f}".format(spotdata[0].waterlevel if spotdata else 0),
                'pred1waterlevel': "{:.2f}".format(spotdata[0].waterlevel if spotdata else 0),
                'pred7waterlevel': "{:.2f}".format(spotdata[0].waterlevel if spotdata else 0),
                'salinity': "{:.2f}".format(spotdata[0].salinity if spotdata else 0),
                'waterlevel': "{:.2f}".format(spotdata[0].waterlevel if spotdata else 0),
                'airpressure': "{:.2f}".format(spotdata[0].airpressure if spotdata else 0),
                'airtempreture': "{:.2f}".format(spotdata[0].airtempreture if spotdata else 0)
            },
            'river': {
                'name': 'Jaopraya',
            }
        })

    def add_data(self, request, serial):
        dat = request.data.copy()
        try:
            spot = Spot.objects.prefetch_related(
                    Prefetch(
                        'bouy',
                        to_attr='bouys'
                    ),
                ).get(serial_number=serial)
            SpotData.objects.create(
                spot_id=spot.id,
                salinity=float(dat[2]),
                waterlevel=float(dat[1]),
                airtempreture=float(dat[0]),
                airpressure=float(dat[1]),
                latitude=float(dat[3]),
                longtitude=float(dat[4])
            )
            return response.Response()
        except:
            pass
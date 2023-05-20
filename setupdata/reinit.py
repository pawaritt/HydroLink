from river.models import DailySpotData, SpotData
from django.db.models import Prefetch
datas = DailySpotData.objects.select_related('spot').all()

bouydatas = list()
for data in datas:
    bouydata = SpotData(
        daily_id=data.id,
        collected_spot_id=data.spot.id,
        airtempreture=data.airtempreture,
        salinity=data.salinity,
        waterlevel=data.waterlevel,
        airpressure=data.airpressure,
        longitude=0,
        latitude=0
    )
    bouydatas.append(bouydata)

SpotData.objects.bulk_create(bouydatas)
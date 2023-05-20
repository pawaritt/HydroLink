from river.models import SpotData, Spot, DailySpotData
from random import randint
import datetime
dailyspotdatas, spotdatas = list(), list()
for spot in Spot.objects.all():
    for x in range(365):
        dailyspotdata = DailySpotData.objects.create(
            spot_id=spot.id,
            salinity = 0,
            waterlevel = 0,
            airpressure = 0,
            airtempreture = 0,
        )
        asal, alev, atem, apre = 0, 0, 0, 0
        for i in range(24):
            bouydata = SpotData(
                daily_id=dailyspotdata.id,
                collected_spot_id=spot.id,
                salinity=randint(1, 100),
                waterlevel=randint(1, 100),
                airpressure=randint(1, 100),
                airtempreture=randint(1, 100),
                latitude=spot.latitude,
                longitude=spot.longtitude
            )
            asal += bouydata.salinity
            alev += bouydata.waterlevel
            atem += bouydata.airtempreture
            apre += bouydata.airpressure
            spotdatas.append(bouydata)
        dailyspotdata.salinity = asal / (i + 1)
        dailyspotdata.waterlevel = alev / (i + 1)
        dailyspotdata.airtempreture = atem / (i + 1)
        dailyspotdata.airpressure = apre / (i + 1)
        dailyspotdatas.append(dailyspotdata)

DailySpotData.objects.bulk_update(dailyspotdatas, ['salinity', 'waterlevel', 'airtempreture', 'airpressure'])
SpotData.objects.bulk_create(spotdatas)
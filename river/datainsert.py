import pandas as pd
from river.models import Spot, SpotData
from bouy.models import BouyData
from django.db.models import Prefetch
from random import randint
df = pd.read_csv('/Users/pawarit/PycharmProjects/YSC/API/collecteddata/testdata.csv')
lat, lng = 13.570689, 100.576353
serialnumber = 'H0'
code = 'p01'
bouydatas = []
for val in df.values:
    spot = Spot.objects.prefetch_related(
            Prefetch(
                'bouy',
                to_attr='bouys'
            ),
        ).get(code=code)
    spotdata = SpotData.objects.create(
        spot_id=spot.id,
        salinity = 0,
        waterlevel = 0,
        airtempreture = 0,
        airpressure = 0,
    )
    asal, alev, atem, apres = 0, 0, 0, 0

    for i, bouy in enumerate(spot.bouys):
        dat = serialnumber
        bouydata = BouyData(
            bouy_id=bouy.id,
            spot_data_id=spotdata.id,
            salinity=val[4],
            waterlevel=val[6],
            airtempreture=randint(28, 31),
            airpressure=val[7],
            latitude=lat,
            longtitude=lng
        )
        asal += bouydata.salinity
        alev += bouydata.waterlevel
        atem += bouydata.airtempreture
        apres += bouydata.airpressure
        bouydatas.append(bouydata)
    spotdata.salinity = asal / (i + 1)
    spotdata.waterlevel = alev / (i + 1)
    spotdata.airpressure = apres / (i + 1)
    spotdata.airtempreture = atem / (i + 1)
    spotdata.save()
BouyData.objects.bulk_create(bouydatas)

# lat, lng = 13.560449, 100.575655
#         serialnumber = 'H0'
#         code = 'p01'
#         bouydatas = []
#         for val in df.values:
#             spot = Spot.objects.prefetch_related(
#                     Prefetch(
#                         'bouy',
#                         to_attr='bouys'
#                     ),
#                 ).get(code=code)
#             spotdata = SpotData.objects.create(
#                 spot_id=spot.id,
#                 salinity = 0,
#                 waterlevel = 0,
#                 airtempreture = 0,
#                 airpressure = 0,
#             )
#             asal, alev, atem, apres = 0, 0, 0, 0

#             for i, bouy in enumerate(spot.bouys):
#                 dat = serialnumber
#                 bouydata = BouyData(
#                     bouy_id=bouy.id,
#                     spot_data_id=spotdata.id,
#                     salinity=val[4],
#                     waterlevel=val[6],
#                     airtempreture=randint(28, 31),
#                     airpressure=val[7],
#                     latitude=lat,
#                     longtitude=lng
#                 )
#                 asal += bouydata.salinity
#                 alev += bouydata.waterlevel
#                 atem += bouydata.airtempreture
#                 apres += bouydata.airpressure
#                 bouydatas.append(bouydata)
#             spotdata.salinity = asal / (i + 1)
#             spotdata.waterlevel = alev / (i + 1)
#             spotdata.airpressure = apres / (i + 1)
#             spotdata.airtempreture = atem / (i + 1)
#             spotdata.save()
#         BouyData.objects.bulk_create(bouydatas)
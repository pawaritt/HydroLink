from river.models import SpotData, Spot
import datetime
from bouy.models import BouyData, Bouy
from random import randint
import datetime
bouydatas, spotdatas = list(), list()

curdate = datetime.datetime.today()

spot = Spot.objects.get(code="ple0")

bouydatas, spotdatas = list(), list()
for i, data in enumerate(spot.data.all()):
    data.collected_date=curdate
    curdate -= datetime.timedelta(days=1)
    spotdatas.append(data)

SpotData.objects.bulk_update(spotdatas, ['collected_date'])


bouydatas, spotdatas = list(), list()
data = [[1.64, 1006.073913], [1.87, 1005.700000], [1.79, 1005.439130], [1.79, 1005.539130], [1.61, 1006.286957], [1.47, 1005.769565], [2.46, 1003.991304]]
data.reverse()
curdate = datetime.datetime.today()
for x in data:
    spotdata = SpotData.objects.create(
        collected_date=curdate,
        spot_id=spot.id,
        salinity = 0,
        waterlevel = 0,
        latitude=1,
        longtitude=1,
        airpressure = 0
    )
    asal, alev, atem = 0, 0, 0
    for i, bouy in enumerate(spot.bouy.all()):
        bouydata = BouyData(
            bouy_id=bouy.id,
            spot_data_id=spotdata.id,
            salinity=randint(1, 100),
            waterlevel=x[0],
            airpressure=x[1],
            battery_percentage=randint(1, 100),
            consume_rate=randint(1, 100)
        )
        asal += bouydata.salinity
        alev += bouydata.waterlevel
        atem += bouydata.airpressure
        bouydatas.append(bouydata)
    spotdata.salinity = asal / (i + 1)
    spotdata.waterlevel = alev / (i + 1)
    spotdata.airpressure = atem / (i + 1)
    spotdatas.append(spotdata)
    curdate -= datetime.timedelta(days=1)

SpotData.objects.bulk_update(spotdatas, ['salinity', 'waterlevel', 'airpressure'])
BouyData.objects.bulk_create(bouydatas)
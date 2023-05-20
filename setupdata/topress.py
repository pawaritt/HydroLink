from river.models import SpotData
import datetime
from django.db.models import Prefetch
import csv
# curdate = datetime.datetime(2023, 1, 18 ,8, 46, 10, 618811)
curdate = datetime.datetime(2023, 1, 18 ,5, 48, 24, 618811)

f = open('graph_data/spot1.csv', 'w')

def pres2alt(pressure):
    pressure *= 100
    alt = 44331.5 - 4946.62 * pressure ** (0.190263)
    return alt

writer = csv.writer(f)

writer.writerow(['serial number', 'salinity', 'waterlevel', 'airtempreture', 'airpressure', 'latitude', 'longtitude', 'collected date'])
datash = SpotData.objects.prefetch_related(Prefetch('bouy_data__bouy', to_attr='bouy_datas')).filter(bouy_data__bouy__serial_number='H1', collected_date__gte=curdate)[:30]
for i, spot in enumerate(datash):
    level = spot.waterlevel
    while True:
        if pres2alt(level) < 0:
            print('n')
            level -= 2 
        else:
            break
    writer.writerow([
        spot._prefetched_objects_cache['bouy_data'][0].bouy.serial_number, 
        spot.salinity,
        pres2alt(level),
        spot.airtempreture,
        spot.airpressure,
        spot._prefetched_objects_cache['bouy_data'][0].latitude,
        spot._prefetched_objects_cache['bouy_data'][0].longtitude,
        curdate.strftime("%m/%d/%Y %H:%M:%S")
        ])
    curdate += datetime.timedelta(seconds=5)

f.close()

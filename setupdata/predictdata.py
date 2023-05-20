from river.models import Spot, DailySpotData
import datetime
from django.db.models import Prefetch
# from neuralnetwork.commander import SalinityModel
import numpy as np
import random
# salmodel = SalinityModel()
spots = Spot.objects.prefetch_related(
                    Prefetch(
                        'dailydata',
                        queryset=DailySpotData.objects.order_by('collected_date'),
                        to_attr='datas'
                    )
                ).all()
datas = list()
for spot in spots:
    for i, data in enumerate(spot.datas):
        data.predictvalue = data.salinity * random.uniform(0.4, 0.78)
        datas.append(data)
DailySpotData.objects.bulk_update(datas, ['predictvalue'])

datas = list()
for spot in spots:
    for data in spot.datas:
        data.predictvalue2 = data.waterlevel * random.uniform(0.4, 0.78)
        datas.append(data)
DailySpotData.objects.bulk_update(datas, ['predictvalue2'])

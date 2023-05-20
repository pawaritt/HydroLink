from river.models import SpotData, Spot, DailySpotData
import datetime
from django.db.models import Prefetch

spotdatas = list()
sp = list()
for spot in Spot.objects.prefetch_related(
    Prefetch(
        "dailydata",
        queryset=DailySpotData.objects.prefetch_related(Prefetch(
            "indaydata", queryset=SpotData.objects.order_by("collected_date").order_by("collected_date"), to_attr="indaydatas")),
        to_attr="dailydatas",
    )
).all():
    for i, data in enumerate(spot.dailydatas[::-1]):
        cday = datetime.datetime.today() - datetime.timedelta(days=i)
        data.collected_date=cday
        spotdatas.append(data)
        for dat in data.indaydatas[::-1]:
            dat.collected_date=cday
            sp.append(dat)
DailySpotData.objects.bulk_update(spotdatas, ['collected_date'])
SpotData.objects.bulk_update(sp, ['collected_date'])

# from river.models import SpotData, Spot
# import datetime

# spotdatas = list()
# for spot in Spot.objects.all():
#     for i, data in enumerate(spot.data.all()):
#         data.latitude=float(0)
#         data.longtitude=float(0)
#         spotdatas.append(data)
# SpotData.objects.bulk_update(spotdatas, ['latitude', 'longtitude'])



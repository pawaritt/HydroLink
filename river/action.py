from django.db.models import Prefetch
from river.models import RiverForecast, DailySpotData, Spot, SpotData, SpotForecast
from neuralnetwork.commander import SalinityModel, WaterDayIntrusionModel
import numpy as np

salmodel = SalinityModel()
watermodel = WaterDayIntrusionModel()
def final_today(today):
    spots = Spot.objects.prefetch_related(
        Prefetch(
            "indaydata",
            queryset=SpotData.objects.filter(collected_date=today),
            to_attr='datas'
        )
    ).all()
    dspots = list()
    for spot in spots:
        salinity, waterlevel, pressure, airtempreture = -999999999, -999999999, -999999999, -999999999
        for data in spot.datas:
            salinity = data.salinity if data.salinity > salinity else salinity
            pressure = data.airpressure if data.airpressure > pressure else pressure
            waterlevel = data.waterlevel if data.waterlevel > waterlevel else waterlevel
            airtempreture = data.airtempreture if data.airtempreture > airtempreture else airtempreture
        dspot = DailySpotData(
            spot_id=spot.id,
            salinity=salinity,
            waterlevel=waterlevel,
            airpressure=pressure,
            airtempreture=airtempreture,
            spot_id=spot.id
        )
        dspots.append(dspot)
    DailySpotData.objects.bulk_create(dspots)

def add_prediction(today):
    spots = Spot.objects.prefetch_related(
            Prefetch(
                "dailydata",
                queryset=DailySpotData.objects.filter(collected_date__gte=today-datetime.timedelta(days=6)).order_by("collected_date"),
                to_attr="dailydatas"
            )
        ).order_by('dis_from_mfr').all()
    sal7 = np.array([[data.salinity for data in spots[0].dailydatas]])
    rivforea = salmodel.predict_river(sal7)
    rivfore = RiverForecast.objects.create(
        spot0=rivforea[0],
        spot1=rivforea[1],
        spot2=rivforea[2],
        spot3=rivforea[3],
        spot4=rivforea[4],
        spot5=rivforea[5]
    )
    fores = list()
    for spot in spots:
        todaydata = spot.dailydatas[0]
        fore = SpotForecast(
            dailyspotdata_id=todaydata.id,
            forecast_id=rivfore.id,
            spot_id=spot.id,
        )
        dis = spot.dis_from_mfr
        sal7 = np.array([[data.salinity for data in spot.dailydatas]])
        fore.salvalue = salmodel.predict(sal7, dis)[0][0]
        waterlevelval = np.array([[d.waterlevel, d.airpressure] for d in spot.dailydatas])
        fore.watervalue = watermodel.predict(waterlevelval)
        fores.append(fore)
    SpotForecast.objects.bulk_create(fores)
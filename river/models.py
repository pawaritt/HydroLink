from django.db import models

# Create your models here.
class River(models.Model):
    name = models.CharField(max_length=255)
    code = models.CharField(max_length=255, unique=True)

class Spot(models.Model):
    river = models.ForeignKey(River, on_delete=models.CASCADE, related_name='spot')
    longtitude = models.FloatField()
    latitude = models.FloatField()
    dis_from_mfr = models.FloatField()
    name = models.CharField(max_length=255)
    code = models.CharField(max_length=6)
    predicted_waterlevel = models.FloatField()
    maxwaterlevel = models.FloatField()
    serial_number = models.CharField(max_length=3)

class DailySpotData(models.Model):
    collected_date = models.DateField(auto_now_add=True)
    spot = models.ForeignKey(Spot, on_delete=models.CASCADE, related_name='dailydata')
    salinity = models.FloatField()
    waterlevel = models.FloatField()
    airpressure = models.FloatField()
    airtempreture = models.FloatField()
    predictvalue = models.FloatField()
    predictvalue2 = models.FloatField()

class SpotData(models.Model):
    collected_date = models.DateTimeField(auto_now_add=True)
    daily = models.ForeignKey(DailySpotData, on_delete=models.CASCADE, related_name='indaydata')
    collected_spot = models.ForeignKey(Spot, on_delete=models.CASCADE, related_name="indaydata")
    salinity = models.FloatField()
    waterlevel = models.FloatField()
    airpressure = models.FloatField()
    airtempreture = models.FloatField()
    latitude = models.FloatField()
    longitude = models.FloatField()

class RiverForecast(models.Model):
    spot0 = models.FloatField()
    spot1 = models.FloatField()
    spot2 = models.FloatField()
    spot3 = models.FloatField()
    spot4 = models.FloatField()
    spot5 = models.FloatField()

class SpotForecast(models.Model):
    dailyspotdata = models.OneToOneField(DailySpotData, on_delete=models.CASCADE, related_name="spot_forecast")
    forecast = models.ForeignKey(RiverForecast, on_delete=models.CASCADE, related_name="spot_forecast")
    spot = models.ForeignKey(Spot, on_delete=models.CASCADE)
    watervalue = models.FloatField()
    salvalue = models.FloatField()
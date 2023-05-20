from django_cron import CronJobBase, Schedule
import datetime
from river.action import *



    
class Predict(CronJobBase):
    RUN_AT_TIMES = ["23:59"] # every day
    schedule = Schedule(run_at_times=RUN_AT_TIMES)
    code = 'river.predict'

    def do(self):
        today = datetime.date.today()
        final_today(today)    # Initialize To As DailySpotData
        add_prediction(today) # Make Salinity and WaterLevel Prediction

today = datetime.date.today()
final_today(today)    # Initialize To As DailySpotData
add_prediction(today) # Make Salinity and WaterLevel Prediction
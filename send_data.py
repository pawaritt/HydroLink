import requests
from random import randint
import json
import serial
import datetime
ser = serial.Serial(
        port='/dev/tty.usbmodem14101',
        baudrate=115200,
    )
target = datetime.datetime.now() + datetime.timedelta(seconds=5)
while True:
    now = datetime.datetime.now()
    dat = ser.readline().decode().rstrip().split(',')
    if now.strftime("%x - %X") == target.strftime("%x - %X"):
        target += datetime.timedelta(seconds=3)
        print('p')
        if len(dat) == 5:
            if '-' in dat[2]:
                dat[2] = dat[2][dat[2].index('-') + 1:]
            dat = [float(i) for i in dat]
            print(dat)
            result = requests.post(
                'http://0.0.0.0:8000/p01',
                {
                    'watervelocity': 20,
                    'B01': json.dumps(dat),
                }
            )

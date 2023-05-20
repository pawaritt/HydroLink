import requests
from random import randint
import json
print('plue')
result = requests.post(
    'http://127.0.0.1:8000/gates',
    {
        'latitude': 100.25587118747328,
        'longitude': 13.838889101809349
    }
)
print(result)

from dataclasses import field, fields
from django.urls import reverse
from rest_framework import serializers
from river.models import River, Spot, SpotData

class SpotDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpotData
        fields = ['salinity', 'waterlevel', 'airpressure', 'airtempreture']

# class SalinityDataSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = SpotData
#         fields = ['salinity']
    
# class WaterLevelDataSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = SpotData
#         fields = ['waterlevel']
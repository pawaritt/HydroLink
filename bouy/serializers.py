from dataclasses import field, fields
from django.urls import reverse
from rest_framework import serializers
# from bouy.models import BouyData

# class BouyDataSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = BouyData
#         fields = ['salinity', 'waterlevel', 'airtempreture', 'airpressure']

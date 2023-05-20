from importlib.resources import Package
from tkinter.tix import Select
from unicodedata import name
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns
from river.views import RiverViewSet, SpotViewSet
app_name = 'river'

river_detail = RiverViewSet.as_view({
    'get': 'retrieve'
})

bouy_detail = SpotViewSet.as_view({
    'get': 'retrieve',
    'post': 'add_data',
})
spot_predict = SpotViewSet.as_view({
    'post': 'predict',
})


urlpatterns = format_suffix_patterns([
    path('', river_detail, name='river_detail'),
    path('<slug:code>', bouy_detail, name='bouy_detail'),
    path('<slug:code>/predict', spot_predict, name='spot_predict')
])

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

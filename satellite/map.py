import rasterio
from pyproj import Transformer
import numpy as np

path = '/Users/pawaritpawaritts/PycharmProjects/YSC/API/satellite/crop.tif'
coor = [13.726548, 100.512352]
lat = coor[0]
lon = coor[1]

class DEMFile:
    def __init__(self):
        self.rds = rasterio.open(path)
        self.space = 0.007
        pass

    def calculate_spred(self, bvalue):
        p1 = (100.271544, 14.226140)
        p2 = (100.892932, 13.447968)
        transformer = Transformer.from_crs("EPSG:4326", self.rds.crs, always_xy=True)
        self.coor = list()
        for x in range(round((p2[0] - p1[0]) // self.space)):
            for y in range(round((p1[1] - p2[1]) // self.space)):
                cur = (p1[0] + (self.space * x), p1[1] - (self.space * y))
                xx, yy = transformer.transform(*cur)
                value = list(self.rds.sample([(xx, yy)]))[0]
                if (value < bvalue) & (value != 0):
                    self.coor.append(cur)
        return self.coor
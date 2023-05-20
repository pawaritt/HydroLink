
from river_model.object import Coordinate


if __name__ == '__main__':
    from object import ExtendedRiverLine, BaseRiverLine
    from coordinates import RIVERS, BASE_RIVER
else:
    from river_model.object import ExtendedRiverLine, BaseRiverLine
    from river_model.coordinates import RIVERS, BASE_RIVER
class River:
    def __init__(self, base_coordinates, extended_coordinates) -> None:
        self.base_coordinates = base_coordinates
        self.extended_coordinates = extended_coordinates
        self.baseline = None 
        self.extendedlines = None
        self.initialize_line()
        self.connect_river_line()
        self.print_points = list()
    
    def initialize_line(self):
        self.baseline = BaseRiverLine(self.base_coordinates)
        self.extendedlines = [ExtendedRiverLine(coor) for coor in self.extended_coordinates]
    
    def calculate_distance(self, coor:Coordinate):
        mdist, mp, mline = self.baseline.closest_to_by_lon(coor)
        for riverline in self.extendedlines:
            dist, p, line = riverline.closest_to_by_lon(coor)
            if dist < mdist:
                mdist, mp, mline = dist, p, line
        dist, p, line = self.baseline.closest_to_by_lat(coor)
        if dist < mdist:
            mdist, mp, mline = dist, p, line
        for riverline in self.extendedlines:
            dist, p, line = riverline.closest_to_by_lat(coor)
            if dist < mdist:
                mdist, mp, mline = dist, p, line
        if mline:
            return mline.calculate_distance(mp), mp
        else: 
            return 100000000000, None

    def connect_river_line(self):
        lo = list()
        for i, exline in enumerate(self.extendedlines):
            c, cline, cpoint = self.baseline.connected_to_line(exline)
            if c:
                exline.connected_river = self.baseline
                exline.connected_line = cline
                exline.intersection_point = cpoint
                exline.initialize_distance += self.baseline.calculate_distance_by_line(cline)
            else:
                lo.append(exline)
        for i, exline in enumerate(lo):
            for mline in ([] if i == 0 else self.extendedlines[0:i]) + self.extendedlines[i+1:]:
                c, cline, cpoint = mline.connected_to_line(exline)
                if c:
                    exline.connected_river = mline
                    exline.connected_line = cline
                    exline.intersection_point = cpoint
                    exline.initialize_distance += mline.calculate_distance_by_line(cline)
                    continue
        for line in self.extendedlines:
            line.init_line_distance()
        
if __name__ == '__main__':
    river = River(BASE_RIVER, RIVERS)

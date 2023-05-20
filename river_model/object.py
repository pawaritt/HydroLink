from math import radians, sin, cos, atan2, sqrt, inf
R = 6372797.56085

def calculate_distance(coor1, coor2): # meters
    lat1 = radians(coor1.latitude)
    lon1 = radians(coor1.longitude)
    lat2 = radians(coor2.latitude)
    lon2 = radians(coor2.longitude)

    dlon = lon2 - lon1
    dlat = lat2 - lat1

    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c 
    return distance

class Coordinate:
    def __init__(self, lon, lat) -> None:
        self.latitude = lat
        self.longitude = lon

class Line:
    def __init__(self, coor1:Coordinate, coor2:Coordinate) -> None:
        self.coor1 = coor1
        self.coor2 = coor2
        self.x_bar = coor1.longitude - coor2.longitude
        if self.x_bar == 0:
            self.x_bar = 1.752e-13
        self.y_bar = coor1.latitude - coor2.latitude
        self.slope = self.y_bar / (self.x_bar)
        self.bias = coor1.latitude - (self.slope * coor1.longitude)
        self.distance = calculate_distance(coor1, coor2)
        self.initial_distance = 0

    def calculate_distance(self, coor):
        return calculate_distance(coor, self.coor1) + self.initial_distance

    def calculate_y(self, x):
        return (self.slope * x) + self.bias

    def calculate_x(self, y):
        return (y - self.bias) / (self.slope)

    def get_intersection_point(self, line):
        x_pos = ((line.bias - self.bias)) / (self.slope - line.slope)
        return (x_pos, self.calculate_y(x_pos))

class RiverLine:
    def __init__(self, coordinates):
        self.lines = list()
        self.coordinates = coordinates
        self.initialize_distance = 0
        self.init_lines()
    
    def init_lines(self):
        for i in range(len(self.coordinates) - 1):
            coor1 = self.coordinates[i]
            coor2 = self.coordinates[i + 1]
            line = Line(Coordinate(coor1[0], coor1[1]), Coordinate(coor2[0], coor2[1]))
            self.lines.append(line)
    
    def calculate_distance_by_line(self, line):
        d = 0
        for l in self.lines[:self.lines.index(line)]:
            d += l.distance
        return d

    def init_line_distance(self):
        d = self.initialize_distance
        for l in self.lines:
            l.initial_distance = d
            d += l.distance
        return d
        
    def connected_to_line(self, exriver):
        exline = exriver.lines[0]
        for line in self.lines:
            if ((line.coor1.latitude > exline.coor1.latitude > line.coor2.latitude) or (line.coor1.latitude < exline.coor1.latitude < line.coor2.latitude)) and ((line.coor1.longitude > exline.coor1.longitude > line.coor2.longitude) or (line.coor1.longitude < exline.coor1.longitude < line.coor2.longitude)):
                return True, line, Coordinate(*exline.get_intersection_point(line))
        return False, None, None

    def closest_to_by_lat(self, coor:Coordinate):
        mdist, mp, mline = inf, None, None
        for line in self.lines:
            if ((line.coor1.latitude > coor.latitude > line.coor2.latitude) or (line.coor1.latitude < coor.latitude < line.coor2.latitude)):
                p = Coordinate(line.calculate_x(coor.latitude), coor.latitude)
                dist = calculate_distance(coor, p)
                if mdist > dist:
                    mdist, mp, mline = dist, p, line
        return mdist, mp, mline

    def closest_to_by_lon(self, coor:Coordinate):
        mdist, mp, mline = inf, None, None
        for line in self.lines:
            if ((line.coor1.longitude > coor.longitude > line.coor2.longitude) or (line.coor1.longitude < coor.longitude < line.coor2.longitude)):
                p = Coordinate(coor.longitude, line.calculate_y(coor.longitude))
                dist = calculate_distance(coor, p)
                if mdist > dist:
                    mdist, mp, mline = dist, p, line
        return mdist, mp, mline

    def closest_to(self, coor:Coordinate):
        return 

class BaseRiverLine(RiverLine):
    def __init__(self, coordinates) -> None:
        super().__init__(coordinates)
        self.init_line_distance()

class ExtendedRiverLine(RiverLine):
    def __init__(self, coordinates) -> None:
        super().__init__(coordinates)
        self.connected_river = None
        self.connected_line = None
        self.intersection_point = None
    
    def calculate_distance_by_line(self, line):
        return super().calculate_distance_by_line(line) + self.initialize_distance
import numpy as np
import tensorflow as tf
import joblib


# transform input values

class SalinityModel:
    def __init__(self) -> None:
        self.stwmodel = tf.keras.models.load_model('neuralnetwork/model/salinity/stwmodel')
        self.fsmodel = tf.keras.models.load_model('neuralnetwork/model/salinity/fsmodel')
        self.fsscaler = joblib.load('neuralnetwork/model/salinity/fsscaler.pkl') 
        self.stwscaler = joblib.load('neuralnetwork/model/salinity/stwscaler.pkl')
        # self.distances = [55475.32866660281, 53097.8591159525, 70499.7785311104, 77544.14414671488, 84816.63643440223, 90642.31891413928, 96187.28270896962, 98126.23868298602, 156449.42532018537, 135954.1695339223, 130301.27800380807, 144575.5629609727, 148247.81409554818, 121774.717196755, 120132.52782009477, 80244.41358796028, 162220.64788236105, 163920.17859860652, 172155.42913414637, 168361.0622944105, 173281.72075341965, 178580.7702742239, 180932.63803473898, 184750.53411863933, 189998.3647382459, 192635.12261348448, 192881.3396724508, 204401.4360379187, 206259.45604220734, 205906.77068367667, 213292.54286109385, 214306.14541420864, 219340.88078442097, 223439.7585834389]
        self.distances = [55475.32866660281, 53097.8591159525, 70499.7785311104, 77544.14414671488, 84816.63643440223, 90642.31891413928]
        self.distances = [d - 43123.57597901813 for d in self.distances]

    def predict(self, last7days, dist):
        # last7days = np.array([[0.3, 0.3, 0.29, 0.3, 0.31, 0.75, 1.9]])
        inputval = self.fsscaler.transform(last7days.reshape(-1, 1)).reshape(1, -1)
        fspotval = self.fsmodel.predict(inputval)
        fspotval = self.fsscaler.inverse_transform(fspotval)
        if dist == 0:
            print(fspotval)
            return fspotval
        topred = np.concatenate((last7days[0][1:],fspotval[0], [dist]))
        scaledpred = self.stwscaler.transform(topred.reshape(1, -1))
        predval = self.stwmodel.predict(scaledpred)
        return predval
    
    def predict_river(self, last7days):
        vals = list()
        for dist in self.distances:
            inputval = self.fsscaler.transform(last7days.reshape(-1, 1)).reshape(1, -1)
            fspotval = self.fsmodel.predict(inputval)
            fspotval = self.fsscaler.inverse_transform(fspotval)
            topred = np.concatenate((last7days[0][1:],fspotval[0], [dist]))
            scaledpred = self.stwscaler.transform(topred.reshape(1, -1))
            predval = self.stwmodel.predict(scaledpred)
            vals.append(predval[0][0])
        return vals

class WaterWeekIntrustionModel:
    def __init__(self):
        pass

class WaterDayIntrusionModel:
    def __init__(self):
        self.model = tf.keras.models.load_model('neuralnetwork/model/waterlevel/model')
        self.scaler = joblib.load('neuralnetwork/model/waterlevel/scaler.pkl')

    def predict(self, last7days):
        inputval = self.scaler.transform(last7days)
        fspotval = self.model.predict(np.array([inputval]))
        return fspotval
if __name__ == "__main__":
    # salmodel = SalinityModel()
    # print(salmodel.predict(1000))
    # print('-----')
    # print(salmodel.predict_river())
    # watermodel = WaterDayIntrusionModel()
    # Sali Input format np.array([[0.3, 0.3, 0.29, 0.3, 0.31, 0.75, 1.9]])
    # Water Model input format np.array([[0.3, 0.3], [0.3, 0.3], [0.3, 0.3], [0.3, 0.3], [0.3, 0.3], [0.3, 0.3], [0.3, 0.3]])) 
    pass
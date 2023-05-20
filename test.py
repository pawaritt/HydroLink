# from patient.models import Patient
from utils import random_string_generator

# patients = Patient.objects.all()
# for p in patients:
#     p.code = random_string_generator(15)
# Patient.objects.bulk_update(patients,[ 'code'])

from game.models import GameHistory
from random import choice, randint


GameHistory.objects.bulk_create([GameHistory(
    type_id=choice([1, 2]),
    patient_id=randint(1, 1000),
    code=random_string_generator(15),
    hand=randint(20, 30),
    rotate=randint(10, 20),
    tiptoe=randint(10, 60),
    score=randint(30,50),
    angry=randint(10,20),
    smile=randint(20, 25),
    sad=randint(1, 12)
) for i in range(1, 10000)])
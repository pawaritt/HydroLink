from django.utils.text import slugify
import string 
import random
import re

def random_string_generator(chars=10, letters=string.ascii_lowercase + string.ascii_uppercase + string.digits):
	return ( ''.join(random.choice(letters) for i in range(chars)))

def create_unique_code(instance=None, model=None, chars=10, new_code=None):

	if new_code:
		code = new_code
	else:
		code = random_string_generator(chars=chars)
	if instance:
		query = instance.__class__.objects.filter(code=code).exists()
	elif model:
		query = model.objects.filter(code=code).exists()
	else:
		return "Fail"
	if query:
		code1 = random_string_generator(chars=chars)

		return create_unique_code(instance, new_code=code1)
	return code

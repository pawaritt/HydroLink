# from django.db.models.signals import post_save, pre_save
# from river.models import Patient
# from utils import create_unique_code


# def pre_save_user_code_field(sender, instance, *args, **kwargs):
#     if (not instance.code) or (instance.code=='') or (len(instance.code) == 15) or (type(instance.code) != str()):
#         instance.code = create_unique_code(instance=instance, chars=15)

# pre_save.connect(pre_save_user_code_field, sender=Patient)

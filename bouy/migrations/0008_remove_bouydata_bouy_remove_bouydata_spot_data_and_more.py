# Generated by Django 4.1.5 on 2023-01-31 13:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("bouy", "0007_alter_bouydata_bouy_alter_bouydata_spot_data"),
    ]

    operations = [
        migrations.RemoveField(model_name="bouydata", name="bouy",),
        migrations.RemoveField(model_name="bouydata", name="spot_data",),
        migrations.DeleteModel(name="Bouy",),
        migrations.DeleteModel(name="BouyData",),
    ]

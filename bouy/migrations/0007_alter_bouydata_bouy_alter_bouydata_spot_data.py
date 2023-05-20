# Generated by Django 4.1.5 on 2023-01-31 12:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("river", "0020_spotdata"),
        ("bouy", "0006_remove_bouydata_battery_percentage"),
    ]

    operations = [
        migrations.AlterField(
            model_name="bouydata",
            name="bouy",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="databouy",
                to="bouy.bouy",
            ),
        ),
        migrations.AlterField(
            model_name="bouydata",
            name="spot_data",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="databouy",
                to="river.dailyspotdata",
            ),
        ),
    ]

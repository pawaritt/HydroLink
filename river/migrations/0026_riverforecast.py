# Generated by Django 4.1.5 on 2023-02-01 08:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("river", "0025_spotdata_latitude_spotdata_longitude"),
    ]

    operations = [
        migrations.CreateModel(
            name="RiverForecast",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("spot0", models.FloatField()),
                ("spot1", models.FloatField()),
                ("spot2", models.FloatField()),
                ("spot3", models.FloatField()),
                ("spot4", models.FloatField()),
                ("spot5", models.FloatField()),
                (
                    "dailyspotdata",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="river.dailyspotdata",
                    ),
                ),
            ],
        ),
    ]

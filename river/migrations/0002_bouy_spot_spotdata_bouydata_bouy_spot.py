# Generated by Django 4.1.2 on 2022-12-18 03:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("river", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Bouy",
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
                ("serial_number", models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name="Spot",
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
                ("longtitude", models.FloatField()),
                ("latitude", models.FloatField()),
                ("dis_from_mfr", models.FloatField()),
                (
                    "river",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="spot",
                        to="river.river",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="SpotData",
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
                ("salinity", models.FloatField()),
                ("waterlevel", models.FloatField()),
                ("watervelocity", models.FloatField()),
                ("tempreture", models.FloatField()),
                (
                    "spot",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="data",
                        to="river.spot",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="BouyData",
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
                ("salinity", models.FloatField()),
                ("waterlevel", models.FloatField()),
                ("tempreture", models.FloatField()),
                ("battery_percentage", models.FloatField()),
                ("consume_rate", models.FloatField()),
                (
                    "bouy",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="data",
                        to="river.bouy",
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="bouy",
            name="spot",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="bouy",
                to="river.spot",
            ),
        ),
    ]
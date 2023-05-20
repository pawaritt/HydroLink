# Generated by Django 4.1.5 on 2023-01-09 04:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("river", "0010_spotdata_airpressure"),
    ]

    operations = [
        migrations.AddField(
            model_name="spot",
            name="predicted_waterlevel",
            field=models.FloatField(default=1),
            preserve_default=False,
        ),
    ]

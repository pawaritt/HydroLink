# Generated by Django 4.1.5 on 2023-01-24 09:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("river", "0015_remove_spotdata_latitude_remove_spotdata_longtitude"),
    ]

    operations = [
        migrations.AddField(
            model_name="spotdata",
            name="predictvalue",
            field=models.FloatField(default=1),
            preserve_default=False,
        ),
    ]

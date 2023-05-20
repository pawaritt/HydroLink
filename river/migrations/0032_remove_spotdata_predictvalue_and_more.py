# Generated by Django 4.1.6 on 2023-02-26 16:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('river', '0031_spotdata_predictvalue_spotdata_predictvalue2'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='spotdata',
            name='predictvalue',
        ),
        migrations.RemoveField(
            model_name='spotdata',
            name='predictvalue2',
        ),
        migrations.AddField(
            model_name='dailyspotdata',
            name='predictvalue',
            field=models.FloatField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='dailyspotdata',
            name='predictvalue2',
            field=models.FloatField(default=1),
            preserve_default=False,
        ),
    ]

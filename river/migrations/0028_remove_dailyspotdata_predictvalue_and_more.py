# Generated by Django 4.1.6 on 2023-02-16 13:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('river', '0027_spotdata_collected_spot'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='dailyspotdata',
            name='predictvalue',
        ),
        migrations.RemoveField(
            model_name='dailyspotdata',
            name='predictvalue2',
        ),
        migrations.CreateModel(
            name='SpotWaterLevelForecast',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.FloatField()),
                ('forecast', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='forecast_water_levels', to='river.riverforecast')),
                ('spot', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='river.spot')),
            ],
        ),
    ]

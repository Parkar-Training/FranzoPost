# Generated by Django 3.2 on 2021-11-11 11:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('advanceProfile', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adv_prof',
            name='About_me',
            field=models.CharField(blank=True, max_length=25),
        ),
        migrations.AlterField(
            model_name='adv_prof',
            name='Activities',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AlterField(
            model_name='adv_prof',
            name='Hobbies',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AlterField(
            model_name='adv_prof',
            name='Interest',
            field=models.CharField(blank=True, max_length=25),
        ),
        migrations.AlterField(
            model_name='adv_prof',
            name='Location',
            field=models.CharField(blank=True, max_length=20),
        ),
    ]

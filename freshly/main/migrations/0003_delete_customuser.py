# Generated by Django 5.0.6 on 2024-08-28 09:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_customuser'),
    ]

    operations = [
        migrations.DeleteModel(
            name='CustomUser',
        ),
    ]
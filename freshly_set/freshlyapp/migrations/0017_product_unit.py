# Generated by Django 5.0.7 on 2024-09-12 21:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('freshlyapp', '0016_category_bgcolor'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='unit',
            field=models.CharField(blank=True, default='PACKET', max_length=250, null=True),
        ),
    ]
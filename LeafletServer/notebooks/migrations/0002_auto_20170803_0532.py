# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-08-03 05:32
from __future__ import unicode_literals

import django.contrib.postgres.fields.hstore
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notebooks', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notebook',
            name='sharing',
            field=django.contrib.postgres.fields.hstore.HStoreField(blank=True, default={}),
        ),
    ]

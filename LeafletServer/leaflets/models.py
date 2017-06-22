"""
Models for leaflets
"""

from django.conf import settings
from django.db import models

# Create your models here.

class Leaflet(models.Model):
    """
    Class for Leaflets
    """
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='leaflets',
                              default='', on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=True, default='')
    leaflet_id = models.BigIntegerField()

"""
Models for sections
"""

from django.db import models
from LeafletServer.leaflets.models import Leaflet

class Section(models.Model):
    """
    Class for Sections
    """
    leaflet = models.ForeignKey(Leaflet, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=True, default='')
    section_id = models.BigIntegerField()

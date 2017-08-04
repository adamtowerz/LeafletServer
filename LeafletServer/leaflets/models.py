"""
Models for Leaflets
"""

from django.conf import settings
from django.contrib.postgres.fields import ArrayField
from django.db import models
from LeafletServer.sections.models import Section

class Leaflet(models.Model):
    """
    Class for Leaflet
    """
    section = models.ForeignKey(Section, on_delete=models.CASCADE,
                                related_name='leaflets')
    title = models.CharField(max_length=100, blank=True, default='')
    is_favorite = models.BooleanField(default=False)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='leaflets',
                              on_delete=models.CASCADE)
    #sharing = ArrayField(ArrayField(models.IntegerField()))

    class Meta:
        """
        Meta class for django
        """
        ordering = ['title']

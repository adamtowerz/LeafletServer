"""
Models for Leaflets
"""

from django.conf import settings
from django.db import models
from LeafletServer.sections.models import Section

class Leaflet(models.Model):
    """
    Class for Leaflet
    """
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='leaflets',
                              on_delete=models.CASCADE)
    favorite = models.BooleanField(default=False)
    section = models.ForeignKey(Section, on_delete=models.CASCADE,
                                related_name='leaflets')
    title = models.CharField(max_length=100, blank=True, default='')

    class Meta:
        """
        Meta class for django
        """
        ordering = ['title']


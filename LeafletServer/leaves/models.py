"""
Models for Leaves
"""

from django.conf import settings
from django.contrib.postgres.fields import JSONField
from django.db import models
from LeafletServer.leaflets.models import Leaflet

class Leaf(models.Model):
    """
    Class for Leaves
    """
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='leaves',
                              on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    content = JSONField(blank=True, null=True)
    leaflet = models.ForeignKey(Leaflet, on_delete=models.CASCADE,
                                related_name='leaves')
    leaf_type = models.TextField(max_length=50, default='text')
    title = models.CharField(max_length=100, blank=True, default='')

    class Meta:
        """
        Meta class for django
        """
        ordering = ['title']

"""
Models for sections
"""

from django.conf import settings
from django.contrib.postgres.fields import ArrayField
from django.db import models
from LeafletServer.notebooks.models import Notebook

class Section(models.Model):
    """
    Class for Sections
    """
    notebook = models.ForeignKey(Notebook, on_delete=models.CASCADE,
                                 related_name='sections')
    title = models.CharField(max_length=100, blank=True, default='')
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='sections',
                              default='', on_delete=models.CASCADE)
    #sharing = ArrayField(ArrayField(models.IntegerField()))

    class Meta:
        """
        Meta class for django
        """
        ordering = ['title']

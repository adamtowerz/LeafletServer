"""
Models for sections
"""

from django.conf import settings
from django.db import models
from LeafletServer.notebooks.models import Notebook

class Section(models.Model):
    """
    Class for Sections
    """
    notebook = models.ForeignKey(Notebook, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=True, default='')
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='sections'
                              , default='', on_delete=models.CASCADE)

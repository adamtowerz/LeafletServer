"""
Models for Notebooks
"""

from django.conf import settings
from django.contrib.postgres.fields import HStoreField
from django.db import models

class Notebook(models.Model):
    """
    Class for Notebooks
    """
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='notebooks'
                              , default='', on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=True, default='')
    sharing = HStoreField(blank=True, default={})

    class Meta:
        """
        Meta class for django
        """
        ordering = ['title']


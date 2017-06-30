"""
Models for Notebooks
"""

from django.conf import settings
from django.db import models

# Create your models here.

class Notebook(models.Model):
    """
    Class for Notebooks
    """
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='notebooks'
                              , default='', on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=True, default='')

    class Meta:
        """
        Meta class for django
        """
        ordering = ['title']

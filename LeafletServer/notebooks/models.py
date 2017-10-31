"""
Models for Notebooks
"""

from django.conf import settings
#from django.contrib.postgres.fields import HStoreField
from django.db import models

class Notebook(models.Model):
    """
    Class for Notebooks
    """
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='notebooks'
                              , default='', on_delete=models.CASCADE)
    color = models.CharField(max_length=6, blank=True, default='ffffff')
    created_on = models.DateTimeField(auto_now_add=True)
    last_edited_by = models.ForeignKey(settings.AUTH_USER_MODEL, default='',
                                       on_delete=models.CASCADE)
    last_edited_when = models.DateTimeField(auto_now_add=True)
    location = models.PositiveIntegerField(blank=True, null=True)
    favorite = models.BooleanField(default=False)
    #sharing = HStoreField(blank=True, default={})
    title = models.CharField(max_length=100, blank=True, default='')

    class Meta:
        """
        Meta class for django
        """
        ordering = ['title']

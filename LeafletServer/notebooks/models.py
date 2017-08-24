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
    color = models.CharField(max_length=6, blank=True, default='ffffff')
    createdOn = models.DateTimeField(auto_now_add=True)
    lastEditedBy = models.ForeignKey(settings.AUTH_USER_MODEL,
                                     related_name='notebooks', default='',
                                     on_delete=models.CASCADE)
    lastEditedWhen = models.DateTimeField(auto_now_add=True)
    location = models.PositiveIntegerField()
    favorite = models.BooleanField(default=False)
    sharing = HStoreField(blank=True, default={})
    title = models.CharField(max_length=100, blank=True, default='')

    class Meta:
        """
        Meta class for django
        """
        ordering = ['title']


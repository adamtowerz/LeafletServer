"""
Models for Notebooks
"""

from django.conf import settings
from django.contrib.postgres.fields import HStoreField, JSONField
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

class Section(models.Model):
    """
    Class for Sections
    """
    notebook = models.ForeignKey(Notebook, on_delete=models.CASCADE,
                                 related_name='sections')
    title = models.CharField(max_length=100, blank=True, default='')
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='sections',
                              default='', on_delete=models.CASCADE)

    class Meta:
        """
        Meta class for django
        """
        ordering = ['title']

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

    class Meta:
        """
        Meta class for django
        """
        ordering = ['title']

class Leaf(models.Model):
    """
    Class for Leaves
    """
    leaflet = models.ForeignKey(Leaflet, on_delete=models.CASCADE,
                                related_name='leaves')
    leaf_type = models.TextField(max_length=50, default='text')
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    content = JSONField()
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='leaves',
                              on_delete=models.CASCADE)

    class Meta:
        """
        Meta class for django
        """
        ordering = ['title']

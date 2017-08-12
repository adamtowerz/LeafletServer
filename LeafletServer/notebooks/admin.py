"""
Admin class for Notebooks
"""

from django.contrib import admin
from LeafletServer.notebooks.models import Notebook, Section, Leaflet, Leaf

class NotebookAdmin(admin.ModelAdmin):
    """
    Notebook admin
    """
    pass

class SectionAdmin(admin.ModelAdmin):
    """
    Section admin
    """
    pass

class LeafletAdmin(admin.ModelAdmin):
    """
    Leaflet admin
    """
    pass

class LeafAdmin(admin.ModelAdmin):
    """
    Leaf admin
    """
    pass

admin.site.register(Notebook, NotebookAdmin)
admin.site.register(Section, SectionAdmin)
admin.site.register(Leaflet, LeafletAdmin)
admin.site.register(Leaf, LeafAdmin)

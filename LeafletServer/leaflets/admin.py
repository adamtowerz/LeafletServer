"""
Admin class for Leaflets
"""

from django.contrib import admin
from LeafletServer.leaflets.models import Leaflet

class LeafletAdmin(admin.ModelAdmin):
    """
    Leaflet admin
    """
    pass

admin.site.register(Leaflet, LeafletAdmin)

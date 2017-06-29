"""
URL config for leaflets
"""

from django.conf.urls import url
from LeafletServer.leaflets import views as leaflet_views

urlpatterns = [
    #url(r'^$', leaflet_views.LeafletList.as_view()),
    url(r'^(?P<pk>[0-9]+)/$', leaflet_views.LeafletDetail.as_view()),
]

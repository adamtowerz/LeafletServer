"""
URL config for react renderer
"""

from django.conf.urls import url
from LeafletServer.client import views as client_views

urlpatterns = [
    url(r'^$', client_views.ReactRender.as_view()),
]

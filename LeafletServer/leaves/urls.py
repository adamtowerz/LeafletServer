"""
URL config for leaves
"""

from django.conf.urls import url
from LeafletServer.leaves import views as leaf_views

urlpatterns = [
    #url(r'^$', leaf_views.LeafList.as_view()),
    url(r'^(?P<pk>[0-9]+)/$', leaf_views.LeafDetail.as_view()),
]

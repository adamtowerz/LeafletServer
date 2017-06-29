"""
URL config for Notebooks
"""

from django.conf.urls import url
from LeafletServer.notebooks import views as notebook_views

urlpatterns = [
    #url(r'^$', leaf_views.LeafList.as_view()),
    url(r'^(?P<pk>[0-9]+)/$', notebook_views.NotebookDetail.as_view()),
]

"""
URL config for Sections
"""

from django.conf.urls import url
from LeafletServer.sections import views as section_views

urlpatterns = [
    url(r'^$', section_views.SectionList.as_view()),
    url(r'^(?P<pk>[0-9]+)/$', section_views.SectionDetail.as_view()),
]


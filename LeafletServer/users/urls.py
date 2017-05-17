"""
URL config for users
"""

from django.conf.urls import url
from LeafletServer.users import views as user_views

urlpatterns = [
    url(r'^$', user_views.UserList.as_view()),
    url(r'^(?P<pk>[0-9]+)/$', user_views.UserDetail.as_view()),
]

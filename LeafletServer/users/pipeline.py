"""
Pipeline for users (social auth)
"""

from LeafletServer.users.models import User

def save_profile(backend, user, response, *args, **kwargs): #pylint: disable=missing-docstring, unused-argument
    print(response)
    User.objects.create(
        user=user, website=response['user']['website'],
        instagram_username=response['user']['username']
    )

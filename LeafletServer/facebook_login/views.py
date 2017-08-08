"""
Sets up social auth for google
"""

from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from rest_auth.registration.views import SocialLoginView

class FacebookLogin(SocialLoginView):
    """
    creates a Social Login View for facebook
    """
    adapter_class = FacebookOAuth2Adapter

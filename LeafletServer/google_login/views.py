"""
Sets up social auth for google
"""

from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView

class GoogleLogin(SocialLoginView):
    """
    creates a Social Login View for google
    """
    adapter_class = GoogleOAuth2Adapter

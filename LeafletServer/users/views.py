"""
Views for users
"""

# from django.views.generic import DetailView
from LeafletServer.users.serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

"""
class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
"""

class UserDetail(APIView):
    """
    User Detail view
    """

    def get(self, request): # pylint: disable=no-self-use
        """
        Get details for logged in user
        """
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

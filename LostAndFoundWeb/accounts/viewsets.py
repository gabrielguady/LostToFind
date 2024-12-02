
from rest_framework import viewsets, permissions

from accounts.models import Account
from accounts.serializers import AccountSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    permission_classes = [permissions.IsAuthenticated]
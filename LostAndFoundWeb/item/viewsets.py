from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser, AllowAny

from item import serializers
from item.models import LostItem, FoundItem, ItemImage, Category


class LostItemViewSet(viewsets.ModelViewSet):
    queryset = LostItem.objects.all()
    serializer_class =serializers.LostItemSerializer

class FoundItemViewSet(viewsets.ModelViewSet):
    queryset = FoundItem.objects.all()
    serializer_class =serializers.FoundItemSerializer
    permission_classes = [AllowAny]


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = serializers.CategoryItemSerializer
    permission_classes = [AllowAny]

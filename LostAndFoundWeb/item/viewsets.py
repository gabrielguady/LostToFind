from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from item import serializers, filters
from item.models import LostItem, FoundItem, ItemImage, Category


class LostItemViewSet(viewsets.ModelViewSet):
    queryset = LostItem.objects.all()
    serializer_class =serializers.LostItemSerializer
    filterset_class = filters.ItemLostFilter
    permission_classes = [AllowAny]

class FoundItemViewSet(viewsets.ModelViewSet):
    queryset = FoundItem.objects.all()
    serializer_class =serializers.FoundItemSerializer
    filterset_class = filters.ItemFoundFilter
    permission_classes = [AllowAny]


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = serializers.CategoryItemSerializer
    filterset_class = filters.ItemCategoryFilter
    permission_classes = [AllowAny]

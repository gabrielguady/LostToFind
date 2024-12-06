from rest_framework import viewsets

from item import serializers
from item.models import LostItem, FoundItem, ItemImage


class LostItemViewSet(viewsets.ModelViewSet):
    queryset = LostItem.objects.all()
    serializer_class =serializers.LostItemSerializer

class FoundItemViewSet(viewsets.ModelViewSet):
    queryset = FoundItem.objects.all()
    serializer_class =serializers.FoundItemSerializer
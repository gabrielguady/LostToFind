from rest_framework import serializers

from item import models
from item.models import Category


class LostItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.LostItem
        fields = '__all__'

class FoundItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.FoundItem
        fields = '__all__'

class CategoryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = '__all__'

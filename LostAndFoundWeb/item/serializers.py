from rest_framework import serializers
from unicodedata import category

from item import models
from item.models import Category


class LostItemSerializer(serializers.ModelSerializer):
    category= serializers.CharField()
    class Meta:
        model = models.LostItem
        fields = ['id', 'title', 'last_seen_details', 'reward', 'date_lost', 'is_resolved', 'category',]

    def validate_category(self, value):
        try:
            # Tentamos encontrar a categoria com base no nome fornecido
            category = Category.objects.get(items=value)
        except Category.DoesNotExist:
            raise serializers.ValidationError("Categoria não encontrada")

        return category

class FoundItemSerializer(serializers.ModelSerializer):
    category = serializers.CharField()
    class Meta:
        model = models.FoundItem
        fields = ['id', 'title', 'description', 'date_found', 'is_resolved', 'category']

    def validate_category(self, value):
        try:
            # Tentamos encontrar a categoria com base no nome fornecido
            category = Category.objects.get(items=value)
        except Category.DoesNotExist:
            raise serializers.ValidationError("Categoria não encontrada")

        return category

class CategoryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = ['items']

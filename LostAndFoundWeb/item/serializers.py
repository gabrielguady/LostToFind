from rest_framework import serializers
from item import models

class LostItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.LostItem
        fields = '__all__'

class FoundItemSerializer(serializers.ModelSerializer):
        class Meta:
            model = models.FoundItem
            fields = '__all__'

class ItemImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ItemImage
        fields = '__all__'



from django.contrib.auth import authenticate
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from accounts.models import Account


class SignupSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True)
    class Meta:
        model = Account
        fields = ['username', 'email', 'password']

    def validate_username(self, value):
        if Account.objects.filter(username=value).exists():
            raise serializers.ValidationError("Username já existe")
        return value

    def validate_email(self, value):
        if Account.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email já cadastrado")
        return value

    def create(self, validated_data):
        account = Account.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return account


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        account = authenticate(username=data['email'], password=data['password'])
        if account and account.is_active:
            data['account'] = account
            return data
        raise serializers.ValidationError("Credenciais incorretas")

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        # Adicione dados personalizados ao token aqui
        data.update({
            'user_id': self.user.id,
            'username': self.user.username,
            'email': self.user.email})
        return data

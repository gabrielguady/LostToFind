
from django.contrib.auth import authenticate
from rest_framework import serializers

from accounts.models import Account

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = 'username'

class TokenSerializer(serializers.Serializer):
    access = serializers.CharField()
    refresh = serializers.CharField()
    account = AccountSerializer()


class SignupSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)
    cellphone = serializers.IntegerField(required=True)
    password = serializers.CharField(write_only=True, required=True)
    class Meta:
        model = Account
        fields = ['username','cellphone', 'email', 'password']

    def validate_phone_number(self, value):
        if not value.isdigit():
            raise serializers.ValidationError("Phone number must contain only digits.")
        if len(value) != 9:
            raise serializers.ValidationError("Phone number must be exactly 9 digits.")
        return value

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
            cellphone=validated_data['cellphone'],
            password=validated_data['password']
        )
        return account


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        account = authenticate(email=data['email'], password=data['password'])
        if account and account.is_active:
            data['account'] = account
            return data
        raise serializers.ValidationError("Credenciais incorretas")

from rest_framework_simplejwt.exceptions import TokenError, InvalidToken
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import authenticate

from accounts.models import Account
from accounts.serializers import SignupSerializer, LoginSerializer, AccountSerializer, TokenSerializer


class LoginViewSet(viewsets.ViewSet):
    serializer_class = LoginSerializer

    @action(detail=False, methods=['get'],
    permission_classes=[AllowAny])
    def current_user(self, request):
        # Verifica se o usuário está autenticado
        if request.user.is_authenticated:
            serializer = AccountSerializer(request.user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(
            {'error': 'Not authenticated', 'message': 'You must be logged in to view user data'},
            status=status.HTTP_401_UNAUTHORIZED
        )

    @action(detail=False, methods=['post'])
    def validate_token(self, request):
        token_string = request.data.get('token')

        if not token_string:
            return Response({
                'valid': False,
                'error': 'No token provided'
            }, status=status.HTTP_400_BAD_REQUEST)

        try:
            AccessToken(token_string)

            return Response({
                'valid': True
            }, status=status.HTTP_200_OK)

        except (TokenError, InvalidToken):
            return Response({
                'valid': False,
                'error': 'Invalid or expired token'
            }, status=status.HTTP_401_UNAUTHORIZED)

    @action(detail=False, methods=['post'])
    def login(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = authenticate(email=serializer.validated_data['email'],
                            password=serializer.validated_data['password'])

        if user:
            refresh = RefreshToken.for_user(user)
            data = {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user': AccountSerializer(user).data
            }
            return Response(TokenSerializer(data).data, status=status.HTTP_200_OK)

        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    @action(detail=False, methods=['post'])
    def refresh_token(self, request):
        try:
            refresh = RefreshToken(request.data.get('refresh'))
            data = {'access': str(refresh.access_token)}
            return Response(data, status=status.HTTP_200_OK)
        except TokenError:
            return Response({'error': 'Invalid or expired token'}, status=status.HTTP_401_UNAUTHORIZED)



class SignupViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]

    @action(detail=False, methods=['post'])
    def signup(self, request):
        serializer = SignupSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                'message': 'Usuário criado com sucesso',
                'user': {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email,
                }
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


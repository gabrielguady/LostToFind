from rest_framework import routers
from accounts.viewsets import LoginViewSet, SignupViewSet

router = routers.DefaultRouter()
router.register('auth', LoginViewSet, basename='login')
router.register('auth', SignupViewSet, basename='signup')  # Registra a rota de signup


urlpatterns = router.urls
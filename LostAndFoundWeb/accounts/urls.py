from rest_framework import routers
from accounts.viewsets import LoginViewSet, SignupViewSet

router = routers.DefaultRouter()
router.register('authentication', LoginViewSet, basename='login')
router.register('authentication', SignupViewSet, basename='signup')  # Registra a rota de signup


urlpatterns = router.urls
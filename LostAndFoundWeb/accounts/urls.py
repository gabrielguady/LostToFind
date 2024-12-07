from rest_framework import routers

from accounts import viewsets


router = routers.DefaultRouter()


router.register('login', viewsets.LoginViewSet, basename='loginAccount')
router.register('signup', viewsets.SignupViewSet, basename='signupAccount')

urlpatterns = router.urls
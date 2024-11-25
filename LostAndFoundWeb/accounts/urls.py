from rest_framework import routers

from accounts import viewsets


router = routers.DefaultRouter()


router.register('Account', viewsets.UserViewSet)

urlpatterns = router.urls
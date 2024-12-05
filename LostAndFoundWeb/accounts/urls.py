from rest_framework import routers

from accounts import viewsets


router = routers.DefaultRouter()


router.register(r'Account', viewsets.AccountViewSet)

urlpatterns = router.urls
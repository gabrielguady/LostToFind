from rest_framework import routers

from item import viewsets

router = routers.DefaultRouter()


router.register('LostItem', viewsets.LostItemViewSet)

router.register('FoundItem', viewsets.FoundItemViewSet)
router.register('category',viewsets.CategoryViewSet)

urlpatterns = router.urls
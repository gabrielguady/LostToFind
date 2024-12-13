from rest_framework import routers

from item import viewsets

router = routers.DefaultRouter()


router.register('lost_item', viewsets.LostItemViewSet)

router.register('found_item', viewsets.FoundItemViewSet)
router.register('category',viewsets.CategoryViewSet)

urlpatterns = router.urls
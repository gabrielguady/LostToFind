from rest_framework import routers

from item import viewsets

router = routers.DefaultRouter()


router.register('LostItem', viewsets.LostItemViewSet)

router.register('FoundItem', viewsets.FoundItemViewSet)

router.register('ItemImage', viewsets.ItemImageViewSet)

urlpatterns = router.urls
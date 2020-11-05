from rest_framework import routers
from .api import TrainerViewSet

router = routers.DefaultRouter()
router.register('api/trainers', TrainerViewSet, 'trainers')

urlpatterns = router.urls   

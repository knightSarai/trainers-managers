from trainers.models import Trainer
from rest_framework import viewsets, permissions
from .serializers import TrainerSerializer

#Trainer ViewSet
class TrainerViewSet(viewsets.ModelViewSet):
    queryset = Trainer.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class =  TrainerSerializer
from trainers.models import Trainer
from rest_framework import viewsets, permissions
from .serializers import TrainerSerializer

#Trainer ViewSet
class TrainerViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    def get_queryset(self):
        return self.request.user.trainers.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
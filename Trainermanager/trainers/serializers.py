from rest_framework import serializers
from trainers.models import Trainer

# Trainer Serializer
class TrainerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trainer
        fields = '__all__'
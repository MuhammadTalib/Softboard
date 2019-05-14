from rest_framework import serializers
from .models import Classes


class SoftBoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classes
        fields = '__all__'

    def create(self, data):
        return Classes.objects.create(**data)

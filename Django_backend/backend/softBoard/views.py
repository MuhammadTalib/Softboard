from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import SoftBoardSerializer      # add this
from .models import Classes                  # add this

from django_serializer.base_views import ListView
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework import status
from django.http import HttpResponse

from django.shortcuts import render, redirect, get_object_or_404


class SoftBoardView(APIView):

    def get(self, request):
        classes = Classes.objects.all()
        serializer = SoftBoardSerializer(classes, many=True)
        return Response({'classes': serializer.data})

    def post(self, request):
        serializer = SoftBoardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def objectDelete(request, object_id):
    object = get_object_or_404(Classes, pk=object_id)
    object.delete()
    return HttpResponse("Deleted!")

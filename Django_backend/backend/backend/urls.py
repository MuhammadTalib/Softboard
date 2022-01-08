from django.contrib import admin
from django.urls import path, include           
from rest_framework import routers                   
from softBoard import views
from softBoard.views import SoftBoardView                           #


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', SoftBoardView.as_view()),
    path('<str:object_id>/delete/', views.objectDelete)
]

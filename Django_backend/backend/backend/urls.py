from django.contrib import admin
from django.urls import path, include                 # add this
from rest_framework import routers                    # add this
from softBoard import views
from softBoard.views import SoftBoardView                           # add this


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', SoftBoardView.as_view())
]

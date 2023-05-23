from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.getAllMovies),
    path('api/add/', views.addMovie),
]
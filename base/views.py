from django.shortcuts import render
from .models import Movie
from django.views.generic import TemplateView

# Create your views here.

def index(request):
    movies = Movie.objects.all()
    return render(request, "frontend/index.html")


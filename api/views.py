from rest_framework.response import Response
#Response Object takes in any python data and serialized data
#that we pass into it and render it out as json data
from rest_framework.decorators import api_view
from base.models import Movie
from .serializers import MovieSerializer

@api_view(['GET'])
def getAllMovies(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addMovie(request):
    serializer = MovieSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
from django.db import models

# Create your models here.
"""
movies table
    id integer(primary key)=>automatically numbered!
    title (varchar)
    production_year(integer)
    director(varchar)
    leading_actor(varchar)
    day_of_view(date)
    review_score(integer)
    streaming_site(url)
"""
SCORE_CHOICES = [
    (1, '⭐'),
    (2, '⭐⭐'),
    (3, '⭐⭐⭐'),
    (4, '⭐⭐⭐⭐'),
    (5, '⭐⭐⭐⭐⭐')
]

class Movie(models.Model):
    title = models.CharField(max_length=255)
    production_year = models.PositiveIntegerField()
    director = models.CharField(max_length=255)
    leading_actor = models.CharField(max_length=255)
    day_of_view = models.DateField()
    review_score = models.PositiveIntegerField(choices=SCORE_CHOICES)
    streaming_site = models.URLField(max_length=200, null=False, blank=True)

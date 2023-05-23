import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import './EachMovie.css';

function EachMovie() {
  const navigate = useNavigate();
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    getAllMovies();
  }, [])

  async function getAllMovies() {
    const fetchedData = await axios.get(`http://localhost:8000/api/`);
    setAllMovies(fetchedData.data);
    console.log("💚", fetchedData.data);
  }
  return (
    allMovies.map((movie, index) => {
      return (
        <div className='movie-card' key={index}>
            <div className='movie'>
            <h1 onClick={() => navigate(`/movie/${index}`)}>{movie.title}</h1>
            <h2>Produced in {movie.production_year}</h2>
            <h2>Directed by {movie.director}</h2>
            <h2>Starring: {movie.leading_actor}</h2>
            <h2>Viewed: {movie.day_of_view}</h2>
            <h2>Score: {movie.review_score}</h2>
            <a href={movie.streaming_site} target="_blank" rel="noopener noreferrer">Watch it Again!</a>
            </div>
        </div>
      )
    })
);
}

export default EachMovie
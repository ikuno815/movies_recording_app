import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MovieDetail.css';
import '../index.css';

function MovieDetail() {
  let params = useParams();//{movieIndex: '0'}
  let movieIndex = Number(params.movieIndex);
  const [movieDetail, setMovieDetail] = useState([]);
  
  useEffect(() => {
    getMovieDetail(movieIndex);
  }, [movieIndex])

  async function getMovieDetail(movieIndex) {
    const fetchedData = await axios.get(`http://localhost:8000/api/`);
    setMovieDetail(fetchedData.data[movieIndex]);
  }

      return (
        <div className='one-movie-card'>
          <div>
          <h1>{movieDetail.title}</h1>
          <h2>Produced in {movieDetail.production_year}</h2>
          <h2>Directed by {movieDetail.director}</h2>
          <h2>Starring: {movieDetail.leading_actor}</h2>
          <h2>viewed: {movieDetail.day_of_view}</h2>
          <h2>score: {movieDetail.review_score}</h2>
          <a href={movieDetail.streaming_site} target="_blank" rel="noopener noreferrer">Watch it Again!</a>
        </div>
        </div>
      )
}

export default MovieDetail
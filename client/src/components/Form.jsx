import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import '../index.css';
import { useNavigate } from 'react-router-dom';

function Form() {
    const navigate = useNavigate();
  
    const [title, setTitle] = useState('');
    const [productionYear, setProductionYear] = useState();
    const [director, setDirector] = useState('');
    const [actor, setActor] = useState('');
    const [dayOfView, setDayOfView] = useState('');
    const [score, setScore] = useState('');
    const [streamURL, setStreamURL] = useState('');

    const handleTitle = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setTitle(value);
    }
    const handleProductionYear = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setProductionYear(value);
    }
    const handleDirector = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setDirector(value);
    }
    const handleActor = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setActor(value);
    }
    const handleDayOfView = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setDayOfView(value);
    }
    const handleScore = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setScore(value);
    }
    const handleStreamURL = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setStreamURL(value);
    }

    const handleNewPost = async(e) => {
      e.preventDefault();
      
      const payload = {
        title: title,
        production_year: productionYear,
        director: director,
        leading_actor: actor,
        day_of_view: dayOfView,
        review_score: score,
        streaming_site: streamURL
      }

      await axios.post(`http://localhost:8000/api/add/`, payload);
      
      setTitle('');
      setProductionYear('');
      setDirector('');
      setActor('');
      setDayOfView('');
      setScore('');
      setStreamURL('');      
    }

  
    return (
    <div className='container'>
        <h1 className='title'>Add a New Movie</h1>
    <div className='add-new-movie'>
        <p>title</p>
        <textarea
        name='title-form'
        type='text'
        rows='1'
        value={title}
        onChange={handleTitle}
        ></textarea>

        <p>production year</p>
        <textarea
        name='prod-year-form'
        type='text'
        rows='1'
        value={productionYear}
        onChange={handleProductionYear}
        ></textarea>

        <p>director</p>
        <textarea
        name='director-form'
        type='text'
        rows='1'
        value={director}
        onChange={handleDirector}
        ></textarea>

        <p>leading actor</p>
        <textarea
        name='actor-form'
        type='text'
        rows='1'
        value={actor}
        onChange={handleActor}
        ></textarea>

        <p>When did you watch it?</p>
        <textarea
        name='day-form'
        type='text'
        rows='1'
        placeholder='2023-05-23'
        value={dayOfView}
        onChange={handleDayOfView}
        ></textarea>

        <p>score</p>
        <textarea
        name='score-form'
        type='text'
        rows='1'
        placeholder='max is 5'
        value={score}
        onChange={handleScore}
        ></textarea>

        <p>streaming URL</p>
        <textarea
        name='url-form'
        type='text'
        rows='1'
        value={streamURL}
        onChange={handleStreamURL}
        ></textarea>

        <div className='button-container'>
        <button className='add-button' onClick={handleNewPost}>Add</button>
        <button className='home-button'onClick={() => navigate('/')}>Home</button>
        </div>
        
        
    </div>
    </div>
    )
  }
  
  export default Form
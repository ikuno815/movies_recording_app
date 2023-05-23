import React from 'react';
import './Navbar.css';
import '../index.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
        <h2 className='navbar-title'>Movie Recording Site</h2>
        <div>
          <button onClick={() => navigate('/movie-form')}>Add a New Movie!</button>
        </div>
    </div>
  )
}

export default Navbar
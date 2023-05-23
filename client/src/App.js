import './App.css';
import React from 'react'
import EachMovie from './components/EachMovie';
import Navbar from './components/Navbar';
import MovieDetail from './components/MovieDetail';
import Form from './components/Form';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={
          <div>
            <div><Navbar/></div>
            <div className='EachMovie'><EachMovie/></div>
          </div>
          }>
          </Route>
          <Route path='/movie/:movieIndex' element={
          <div>
            <div><Navbar/></div>
            <div><MovieDetail/></div> 
          </div>
          }>
          </Route>
          <Route path='/movie-form' element={<Form/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

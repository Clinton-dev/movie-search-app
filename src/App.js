import React from 'react';
import MovieSearch from './components/MovieSearch';
import './App.css';

function App() {
{/* 
  1. dont search anything if input field is empty
  2. give user a msg if there are no movie results
  3. add a watchlist where user can add their search
  4. add a btn show description 
*/}
  return (
    <div className="container">
      <h1 className="title">Movie search app</h1>
      <MovieSearch />
    </div>
  );
}

export default App;

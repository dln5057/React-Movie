import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie';

const movies = [{
    id: 1,
    title: 'Star Wars'
  },
  {
    id: 2,
    title: 'Spider Man'
  },
  {
    id: 3,
    title: 'Guardians of the Galaxy'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {/* Movies array mapping over each movie and returning a movie component */}
        {movies.map(movie => (<Movie key={movie.id} movie={movie}/>))}
      </div>
    );
  }
}



export default App;
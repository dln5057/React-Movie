import React, { Component } from 'react';

import Movie from './Movie';

class MoviesList extends Component {
// default state of an empty array for movies data
  state = {
    movies: [],
  }

  // async to wait until we receive the data before using it
  async componentDidMount() {
    // try catch looks for errors in loading api
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=04dad269f9a27a4d2de91748f74db31d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {/* Movies array mapping over each movie and returning a movie component */}
        {this.state.movies.map(movie => (<Movie key={movie.id} movie={movie} />))}
      </div>
    );
  }
}

export default MoviesList;

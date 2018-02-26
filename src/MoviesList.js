import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Movie from './Movie';

class MoviesList extends PureComponent {
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
      <MovieGrid>
        {/* Movies array mapping over each movie and returning a movie component */}
        {this.state.movies.map(movie => (<Movie key={movie.id} movie={movie} />))}
      </MovieGrid>
    );
  }
}

export default MoviesList;

// styles for styled components

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;

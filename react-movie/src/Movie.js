import React, { Component } from 'react';

export default class Movie extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.movie.title}</h2>
        <p>{this.props.movie.description}</p>
      </div>
    )
  }
}

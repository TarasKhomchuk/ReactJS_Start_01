import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { moviesData } from "./moviesData";
import MovieItem from "./MovieItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: moviesData
    };
  }

  removeMovie = movie => {
    const updatedMovies = this.state.movies.filter(function(item) {
      return item.imdbID !== movie.imdbID;
    });
    this.setState({ movies: updatedMovies });
  };

  render() {
    return (
      <div>
        {this.state.movies.map(movie => {
          return (
            <MovieItem
              data={movie}
              key={movie.imdbID}
              onDeleteMovie={this.removeMovie}
            />
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import MovieImage from "./MovieImage";

class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      like: false
    };
  }

  toggleOverview = () => {
    this.setState({ show: !this.state.show });
  };

  handleLike = () => {
    this.setState({ like: !this.state.like });
  };

  render() {
    //console.log("MovieItem = ", this);
    const {
      //data: { Title, imdbVotes, Poster, Plot, Images }
      data: { Title, imdbVotes, Plot, Images }
    } = this.props;
    //<Image src={Poster} alt={Title} />

    return (
      <div style={{ width: "300px" }}>
        <MovieImage src={Images[0]} alt={Title} />
        <p>{Title}</p>
        <p>{imdbVotes}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            className={this.state.like ? "btn--like" : ""}
          >
            Like
          </button>
        </div>
        {this.state.show ? <p>{Plot}</p> : null}

        <button
          type="button"
          onClick={this.props.onDeleteMovie.bind(this, this.props.data)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default MovieItem;

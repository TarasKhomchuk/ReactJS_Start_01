import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const movie = {
  title: "Avengers: Infinity War",
  vote_avg: 8.5,
  image:
    "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  overview:
    "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
};

function Image(props) {
  return <img width="100%" src={props.src} alt={props.alt} />;
}

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
    console.log("MovieItem = ", this);
    const {
      data: { title, vote_avg, image, overview }
    } = this.props;

    return (
      <div style={{ width: "300px" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_avg}</p>
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
        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

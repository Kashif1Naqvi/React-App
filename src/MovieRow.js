import React, { Component } from "react";

class MovieRow extends Component {
  viewMovie(){
      const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
      window.location.href = url;
    }
    render() {
    return (
      <table key={this.props.movie.id}>
          <tr>
            <td>
              <img src = {this.props.movie.poster_src}  width="200"  alt="Image is not found" />
              <h3 >{this.props.movie.title}</h3>
              <p> {this.props.movie.overview}  </p>
              <input type="button" className="btn btn-primary"  onClick={this.viewMovie.bind(this)} value="View"/>
            </td>
          </tr>
      </table>
    );
  }
}
export default MovieRow;

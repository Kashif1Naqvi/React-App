import React, { Component } from "react";

class MovieRow extends Component {
  render() {
    return (
      <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img src={this.props.movie.poster_src} width="120" alt="poster" />
            </td>
            <td>
              <p>{this.props.movie.title}</p>
              <p>{this.props.movie.overview}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default MovieRow;

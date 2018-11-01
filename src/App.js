import React, { Component } from "react";
import "./App.css";
import green from "./green.png";
import $ from "jquery";
class App extends Component {
  constructor(props) {
    super(props);

    this.performSearch();
  }
  performSearch() {
    console.log("performsearch using moviedb");
    const urlString =
      "https://api.themoviedb.org/3/search/movie?query=marvel&api_key=1b5adf76a72a13bad99b8fc0c68cb085";
    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("fetch data successfully ");
        // console.log(searchResults);
        const results = searchResults.results;
        // console.log(results[0]);
        var movieRows = [];

        results.forEach(movie => {
          console.log(movie.title);
          const movieRow = <MovieRow movie={movie} />
          movieRows.push(movieRow)
        })
        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("faild to fetch data ");
      }
    });
  }
  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img width="50" src={green} alt="app icon" />
              </td>
              <td width="8" />
              <td>
                <h1>MovieDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <input
          style={{
            fontSize: 24,
            display: "block",
            widthy: "99%",
            paddingTop: 8,
            paddingLeft: 16
          }}
          placeholder="Enter search"
        />
      </div>
    );
  }
}

export default App;

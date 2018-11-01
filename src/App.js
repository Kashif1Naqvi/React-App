import React, { Component } from "react";
import "./App.css";
import green from "./green.png";
import $ from "jquery";
import MovieRow from './MovieRow';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    // this.performSearch("ant man");
        this.performSearch("ant man");

  }
  performSearch(searchTerm) {
    console.log("performsearch using moviedb");
    // const urlString ="https://api.themoviedb.org/3/search/movie?query=woman&api_key=1b5adf76a72a13bad99b8fc0c68cb085";
    const urlString ="https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm;
    
    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("fetch data successfully ");
        // console.log(searchResults);
        const results = searchResults.results;
        // console.log(results[0]);
        var movieRows = [];

        results.forEach(movie => {
          // console.log(movie.title);
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          // console.log(movie.poster_src)
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })
        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("faild to fetch data ");
      }
    });
  }
  searchChangeHandler(e){
    e.preventDefault();
    console.log(e.target.value)
    const searchTerm = e.target.value;
    this.performSearch(searchTerm);
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
          onChange={this.searchChangeHandler.bind(this)}
          placeholder="Enter search"
        />
        {this.state.rows}
      </div>
    );
  }
}

export default App;

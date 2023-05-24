import React from "react";
import { useState } from "react";

const apiKey = "613b8a87";

function MovieRecommend() {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTitle}&y=${searchYear}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.Error) {
          console.error(data.Error);
        } else {
          setMovies(data.Search);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>MovieRecommend</h1>
      <input
        type="text"
        placeholder="Movie title"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Year"
        value={searchYear}
        onChange={(e) => setSearchYear(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {movies &&
          movies.map((movie) => (
            <li key={movie.imdbID}>
              {movie.Title} ({movie.Year})
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MovieRecommend;

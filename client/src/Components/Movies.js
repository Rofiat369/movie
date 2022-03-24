import React, { useState, useEffect } from "react";
import getLikedMovies from "./getLikedMovies";
import MoviePoster from "./MoviePoster";

import "./Movies.css";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState(getLikedMovies());

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((resData) => {
        setMovies(resData.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // likeMovie will add movie poster to likedMovies in localStorage
  function likeMovie(movie) {
    const updatedLikedMovies = [...likedMovies, movie];
    localStorage.setItem(
      "likedMovies",
      JSON.stringify([...likedMovies, movie])
    );
    setLikedMovies(updatedLikedMovies);
  }

  // dislikeMovie will remove movie poster from likedMovies in localStorage
  function dislikeMovie(movie) {
    const updatedLikedMovies = likedMovies.filter((likedMovie) => {
      return likedMovie.id !== movie.id;
    });
    localStorage.setItem("likedMovies", JSON.stringify(updatedLikedMovies));
    setLikedMovies(updatedLikedMovies);
  }

  return (
    <div>
      <div className="container">
        {/* Map through all the movie from the api and return poster image */}
        {movies.map((movie) => {
          return (
            <MoviePoster
              key={movie.id}
              movie={movie}
              dislikeMovie={dislikeMovie}
              likeMovie={likeMovie}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Movies;

import React, { useState } from "react";
import getLikedMovies from "./getLikedMovies";
import MoviePoster from "./MoviePoster";

function LikedMovies() {
  const [likedMovies, setLikedMovies] = useState(getLikedMovies());

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
        {/* Map through all the liked movies saved in local storage and return poster image */}
        {likedMovies.map((likedMovie) => {
          return (
            <MoviePoster
              key={likedMovie.id}
              movie={likedMovie}
              dislikeMovie={dislikeMovie}
              likeMovie={likeMovie}
            />
          );
        })}
      </div>
    </div>
  );
}

export default LikedMovies;

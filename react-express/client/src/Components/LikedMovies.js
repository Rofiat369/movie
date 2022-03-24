import React from "react";
import getLikedMovies from "./getLikedMovies";
import "./Movies.css";
import Navigation from "./Navigation";

function LikedMovies() {
  const likedMovies = getLikedMovies();
  return (
    <div>
      <Navigation />
      <div className="container">
        {likedMovies.map((movie) => {
          const imgApi = `https://image.tmdb.org/t/p/w500`;

          return (
            <figure key={movie.id} className="posterImg-wrap">
              <img
                src={imgApi + movie.poster_path}
                className="poster-img"
                alt="poster"
              />
              
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export default LikedMovies;

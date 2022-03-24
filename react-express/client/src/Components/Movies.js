import React, { useState, useEffect } from "react";
import { BsFillHandThumbsDownFill } from "react-icons/bs";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import getLikedMovies from "./getLikedMovies";

import "./Movies.css";
import Navigation from "./Navigation";

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
    localStorage.setItem('likedMovies', JSON.stringify([...likedMovies, movie]));
    setLikedMovies(updatedLikedMovies);
  }

  // dislikeMovie will remove movie poster to likedMovies in localStorage
  function dislikeMovie(movie) {
    const updatedLikedMovies = likedMovies.filter((likedMovie) => {
      return likedMovie.id !== movie.id;
    });
    localStorage.setItem('likedMovies', JSON.stringify(updatedLikedMovies));
    setLikedMovies(updatedLikedMovies);
  }

  return (
    <div>
      <Navigation />
      <div className="container">
        {movies.map((movie) => {
          const imgApi = `https://image.tmdb.org/t/p/w500`;
          const foundMovieInLikedMovies = likedMovies.find((likedMovie) => {
            return likedMovie.id === movie.id;
          });

          return (
            <figure key={movie.id} className="posterImg-wrap">
              <img
                src={imgApi + movie.poster_path}
                className="poster-img"
                alt="poster"
              />
              <div className="overlay">
                {foundMovieInLikedMovies ? (
                  <BsFillHandThumbsDownFill
                    size={50}
                    className="thumbsDown thumbs"
                    onClick={() => dislikeMovie(movie)}
                  />
                ) : (
                  <BsFillHandThumbsUpFill
                    size={50}
                    className="thumbsUp thumbs"
                    onClick={() => likeMovie(movie)}
                  />
                )}
              </div>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export default Movies;

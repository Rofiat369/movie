import React from "react";
import { BsFillHandThumbsDownFill } from "react-icons/bs";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import getLikedMovies from "./getLikedMovies";

function MoviePoster(props) {
  const likedMovies = getLikedMovies();

  const { movie, dislikeMovie, likeMovie } = props;
  const imgApi = `https://image.tmdb.org/t/p/w500`;
  

  // Check if movie.id as an equal link to any id in the liked movies
  const foundMovieInLikedMovies = likedMovies.find((likedMovie) => {
    return likedMovie.id === movie.id;
  });


  return (
    <figure className="posterImg-wrap">
      <img
        src={imgApi + movie.poster_path}
        className="poster-img"
        alt="poster"
      />
      <div className="overlay">
        {/* if movie is alread in liked movies display thumbs down else display thumbs up */}
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
}

export default MoviePoster;

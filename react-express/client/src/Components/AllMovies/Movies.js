import React, { useState, useEffect } from "react";
import { BsFillHandThumbsDownFill } from "react-icons/bs";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

import "./Movies.css";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState([]);

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

  console.log("THISISITEMS", movies);

  const individualImg = movies.map((poster) => {
    return poster.poster_path;
  });

  useEffect(() => {
    localStorage.setItem("like", JSON.stringify(individualImg));
  }, [like]);

  // everytime the like is clicked
  //save movie object in an array called liked movies
  //when dislike remove movie from local storage
  // /liked should display the array of liked movies

  localStorage.setItem("items", JSON.stringify(movies));
  //const localArray = JSON.parse(localStorage.getItem("items"))
  function likedMovies(item, index) {
    if (item[index].like === 0) {
      item[index].like++;
      localStorage.setItem("likeditems", JSON.stringify(movies));
    }
  }

  function dislikedMovies(item, index) {
    if (item[index].like === 1) {
      item[index].like--;
      localStorage.setItem("items", JSON.stringify(movies));
    }
  }

  return (
    <div>
      <div className="container">
        {movies.map((item, index) => {
          const imgApi = `https://image.tmdb.org/t/p/w500`;
          return (
            <figure className="posterImg-wrap">
              <img
                key={item.id}
                src={imgApi + item.poster_path}
                className="poster-img"
                alt="poster"
              />
              <figcaption className="overlay">
                <BsFillHandThumbsUpFill
                  size={50}
                  className="thumbsUp thumbs"
                  onClick={setLike}
                />
                <BsFillHandThumbsDownFill
                  size={50}
                  className="thumbsDown thumbs"
                  onClick={dislikedMovies}
                />
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export default Movies;

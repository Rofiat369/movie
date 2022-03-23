import React, { useState, useEffect } from "react";
import { BsHandThumbsUp } from 'react-icons/bs';
import { BsHandThumbsDown } from 'react-icons/bs';

import "./Movies.css";

function Movies(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
         fetch("http://localhost:5000/")
          .then(res =>  res.json())
          .then(items => {
            console.log("SETTINGITEMSFROMRESULTS", items)
            setMovies(items);
        })
            .catch((err) => {
                console.log(err);
              });
      }, []);
      
      console.log("THISISITEMS", movies)
        
      // localStorage.setItem("items", JSON.stringify(movies))
      //const localArray = JSON.parse(localStorage.getItem("items"))
      function likedMovies(item, index){
          if(item[index].like === 0){
            item[index].like++
            // localStorage.setItem("items", JSON.stringify(movies))
          }
      }

      function dislikedMovies(item, index){
        if(item[index].like === 1){
            item[index].like--
            localStorage.setItem("items", JSON.stringify(movies))
          }
      }
   

    return(
        <div>
          <h1>Movies</h1>
            {movies.map((item, index) => {
            const imgApi = `https://image.tmdb.org/t/p/w500`
              return  (
                <>
                    <img
                    key={item.id}
                    src={imgApi+item.poster_path}
                    className="container-img"
                    alt="poster"
                    />
                    <section className="liking">
                    <div><BsHandThumbsUp onClick={likedMovies} /> </div>
                    <div> <BsHandThumbsDown onClick={dislikedMovies} /></div>
                    </section>
                </>
              )
            })}  
        </div>
    )
  }

export default Movies;
import React, { useState, useEffect } from "react";
import { BsHandThumbsUp } from 'react-icons/bs';
import { BsHandThumbsDown } from 'react-icons/bs';

import "./Movies.css";

function Movies(){
    // const [loaded, setLoaded] = useState(false);
    const [movies, setMovies] = useState([]);

    function append(array){
        const newArr = array.map(element => {
          return  {...element, like: 0}
        });
         console.log("INSIDE APPEND", newArr)
        return newArr;
    }

    useEffect(() => {
         fetch("http://localhost:5000/")
          .then(res =>  res.json())
          .then(items => {
            console.log("SETTINGITEMSFROMRESULTS", items.results)
            console.log(append(items.results))
            setMovies(append(items.results))
            console.log("THISISITEMS", movies)
        }
            )
            .catch((err) => {
                console.log(err);
              });
      }, []);
      
      localStorage.setItem("items", JSON.stringify(movies))
      const localArray = JSON.parse(localStorage.getItem("items"))
      function likedMovies(item, index){
          if(item[index].like === 0){
            item[index].like++
            localStorage.setItem("items", JSON.stringify(movies))
          }
      }

      function dislikedMovies(item, index){
        if(item[index].like === 1){
            item[index].like--
            localStorage.setItem("items", JSON.stringify(movies))
          }
      }

      const posterItems = movies.map((item, index) => {
        const imgApi = `https://image.tmdb.org/t/p/w500`

        return  (
            <>
        <img
        key={index}
          src={imgApi+item.poster_path}
          className="container-img"
        //   style={{ width: 400 }}
          alt="poster"
        />
        <div className="liking">
            <div><BsHandThumbsUp onClick={likedMovies} /> </div>
            <div> <BsHandThumbsDown onClick={dislikedMovies} /></div>
        </div>
        </>
        )
       })
   

    return(
        <div>
            
            <h1>Movies</h1>
              {posterItems}  
        </div>
    )
    
}

export default Movies;
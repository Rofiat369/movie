import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"


export default function Navigation(props){
    return(
            <nav>
                <ul>
                    <li>
                    <Link to="/">Movies</Link>  
                    </li>
                    <li>
                    <Link to="/liked">Liked</Link>
                    </li>
                </ul>
            </nav>
    )
}


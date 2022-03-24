// Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import "./Components/Movies.css"

import Movies from "./Components/Movies";

import LikedMovies from "./Components/LikedMovies";

import Navigation from "./Components/Navigation";

function App() {
  return (
    // Routes
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/liked" element={<LikedMovies />} />
      </Routes>
    </Router>
  );
}

export default App;

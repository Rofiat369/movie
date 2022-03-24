// Imports
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import "./App.css"

import Movies from "./Components/Movies";

import LikedMovies from "./Components/LikedMovies";

function App() {
  return (
    // Routes
    <Router>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/liked" element={<LikedMovies />} />
      </Routes>
    </Router>
  );
}

export default App;
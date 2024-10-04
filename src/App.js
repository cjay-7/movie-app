import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PopularMovies from "./pages/PopularMovies";
import TopRatedMovies from "./pages/TopRatedMovies";
import UpcomingMovies from "./pages/UpcomingMovies";
import MovieDetails from "./pages/MovieDetails";
import SearchResults from "./pages/SearchResults";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<PopularMovies />}
        />
        <Route
          path="/top-rated"
          element={<TopRatedMovies />}
        />
        <Route
          path="/upcoming"
          element={<UpcomingMovies />}
        />
        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />
        <Route
          path="/search/:query"
          element={<SearchResults />}
        />
      </Routes>
    </Router>
  );
}

export default App;

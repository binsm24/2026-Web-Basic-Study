import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import movieData from "./mock/dummy.json"; 
import Header from "./components/Header";
import MainPage from "./page/MainPage";
import FavoritePage from "./page/FavoritePage";
import MoviePage from "./page/MoviePage";

import "./App.css";

export default function App() {
  const [movies, setMovies] = useState(
    movieData.map((movie) => ({ ...movie, isLiked: false })),
  );

const toggleHeart = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ?
          { ...movie, isLiked: !movie.isLiked }
          : movie
      )
    );
};

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<MainPage movies={movies} onToggle={toggleHeart} />}
        />
        <Route
          path="/favorites"
          element={
            <FavoritePage
              movies={movies.filter((movie) => movie.isLiked)}
              onToggle={toggleHeart}
            />
          }
        />
        <Route
          path="/movie/:id"
          element={<MoviePage movies={movies} onToggle={toggleHeart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

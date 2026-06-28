import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import movieData from "./mock/dummy.json"; 
import Header from "./components/Header";
import MainPage from "./page/MainPage";
import FavoritePage from "./page/FavoritePage";
import MoviePage from "./page/MoviePage";
import AddMoviePage from "./page/AddMoviePage";

import "./App.css";

export default function App() {
  const [movies, setMovies] = useState(
    movieData.map((movie) => ({ ...movie, isLiked: false })),
  );

  const [searchTerm, setSearchTerm] = useState("");

  const toggleHeart = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, isLiked: !movie.isLiked } : movie,
      ),
    );
  };

  const deleteMovie = (id) => {
    if (window.confirm("정말로 이 영화를 삭제하시겠습니까?")) {
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <BrowserRouter>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              movies={filteredMovies}
              onToggle={toggleHeart}
              onDelete={deleteMovie}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritePage
              movies={movies.filter((m) => m.isLiked)}
              onToggle={toggleHeart}
              onDelete={deleteMovie}
            />
          }
        />
        <Route
          path="/movie/:id"
          element={
            <MoviePage
              movies={movies}
              onToggle={toggleHeart}
              onDelete={deleteMovie}
            />
          }
        />
        <Route
          path="/add"
          element={<AddMoviePage movies={movies} setMovies={setMovies} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

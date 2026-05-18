import Movie from "/src/components/Movie";

function MainPage({ movies, onToggle }) {
  return (
    <div className="main-container">
      <div className="movie-grid">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} onToggle={onToggle} />
        ))}
      </div>
    </div>
  );
}

export default MainPage;

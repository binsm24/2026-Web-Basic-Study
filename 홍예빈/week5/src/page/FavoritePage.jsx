import Movie from "/src/components/Movie.jsx";

function FavoritePage({ movies, onToggle }) {
  return (
    <div className="main-container">
      <h1>즐겨찾기 목록</h1>

      {movies.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "50px" }}>
          아직 좋아요를 누른 영화가 없습니다.
        </p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} onToggle={onToggle} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritePage;

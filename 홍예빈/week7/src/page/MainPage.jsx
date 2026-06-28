import Movie from "/src/components/Movie";

function MainPage({ movies, onToggle, onDelete }) {
  return (
    <div className="main-container">
      <div className="movie-grid">
        {/* movies라는 배열을 순회하며, 하나의 객체(movie)를 Movie 컴포넌트에 전달 */}
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default MainPage;

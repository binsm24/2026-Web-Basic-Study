import Movie from "/src/components/Movie.jsx";

function FavoritePage({ movies, onToggle }) {
  return (
    <div className="main-container">
      <h1>즐겨찾기 목록</h1>

      {/* 1. 조건부 렌더링: 즐겨찾기(movies) 배열이 비어있는 경우 예외 처리 */}
      {movies.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "50px" }}>
          아직 좋아요를 누른 영화가 없습니다.
        </p>
      ) : (
        /* 2. 데이터 매핑: 좋아요를 누른 영화 리스트를 순회하며 Movie 컴포넌트 출력 */
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

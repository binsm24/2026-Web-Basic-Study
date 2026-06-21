import { useNavigate } from "react-router-dom";
import "./Movie.css";
import heart from "../assets/heart.svg";
import heartOutline from "../assets/heart-outline.svg";

function Movie({ movie, onToggle }) {
  // 페이지 이동을 위한 네비게이트 함수 객체 생성
  const navigate = useNavigate();

  return (
    // onClick -> Movie 컴포넌트 클릭 시 페이지 이동
    <div className="movie-card" onClick={() => navigate(`/movie/${movie.id}`)}>
      {/* 1. 포스터 영역 */}
      <div className="poster-container">
        <img
          className="poster-img"
          src={movie.posterImgUrl}
          alt={movie.title}
        />

        {/* 하트 버튼: 이벤트 버블링을 막아 상세 페이지로 넘어가지 않고 하트만 토글되게 합니다. */}
        <button
          className="like-btn"
          onClick={(e) => {
            e.stopPropagation();
            onToggle(movie.id);
          }}
        >
          <img src={movie.isLiked ? heart : heartOutline} />
        </button>
      </div>

      {/* 2. 상세 정보 영역 */}
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p className="subtitle">{movie.subTitle}</p>

        {/* 장르 리스트 매핑 */}
        <ul className="genres">
          {movie.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>

        {/* 설명 (summary) */}
        <p className="description">
          {movie.description.length > 100
            ? movie.description.substring(0, 100) + "..."
            : movie.description}
        </p>
      </div>
    </div>
  );
}

export default Movie;

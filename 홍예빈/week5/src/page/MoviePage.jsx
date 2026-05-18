import { useParams } from "react-router-dom";
import heart from "../assets/heart.svg";
import heartOutline from "../assets/heart-outline.svg";
import "./MoviePage.css";

function MoviePage({ movies, onToggle }) {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <div className="error">영화를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="movie-detail-container">
      <div className="detail-poster">
        <img src={movie.posterImgUrl} alt={movie.title} />
      </div>

      <div className="detail-content">
        <div>
          <h1>{movie.title}</h1>
          <button className="like-btn" onClick={() => onToggle(movie.id)}>
            <img src={movie.isLiked ? heart : heartOutline} alt="좋아요" />
          </button>
        </div>

        <p className="detail-subtitle">{movie.subTitle}</p>

        <div className="detail-genres">
          {movie.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>

        <div className="detail-summary">
          <p>{movie.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;

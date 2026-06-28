import { useNavigate } from "react-router-dom";
import "./Movie.css";
import heart from "../assets/heart.svg";
import heartOutline from "../assets/heart-outline.svg";
import deleteIcon from "../assets/delete-icon.svg";

function Movie({ movie, onToggle, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="movie-card" onClick={() => navigate(`/movie/${movie.id}`)}>
      <div className="poster-container">
        <img
          className="poster-img"
          src={movie.posterImgUrl}
          alt={movie.title}
        />

        <div className="btn-container">
          <button
            className="like-btn"
            onClick={(e) => {
              e.stopPropagation();
              onToggle(movie.id);
            }}
          >
            <img src={movie.isLiked ? heart : heartOutline} />
          </button>

          <button
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation(); 
              onDelete(movie.id);
            }}
          >
            <img src={deleteIcon} alt="삭제" />
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p className="subtitle">{movie.subTitle}</p>

        <ul className="genres">
          {movie.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>

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

import { Link } from "react-router-dom";
import heartOutline from "../assets/heart-outline.svg";
import searchIcon from "../assets/search-icon.svg"; 
import "./Header.css";

function Header({ onSearch }) {
  return (
    <header className="navbar">
      <div className="nav-container">
        <h1 className="logo">
          <Link to="/" className="logo-text">
            🎬 Movie Log
          </Link>
        </h1>

        <div className="fav-page-btn">
          <Link to="/add" className="add-movie-link">
            ➕ 영화 추가
          </Link>

          <Link
            to="/favorites"
            className="favorite-icon-link"
            title="즐겨찾기 이동"
          >
            <img src={heartOutline} alt="즐겨찾기" />
          </Link>
        </div>
      </div>
      <div className="search-bar-container">
        <div className="search-bar">
          <img src={searchIcon} alt="검색" className="search-icon" />
          <input
            type="text"
            placeholder="영화 제목 검색..."
            onChange={onSearch} 
          />
        </div>
      </div>
    </header>
  );
}

export default Header;

import { Link } from "react-router-dom";
import heartOutline from "../assets/heart-outline.svg";
import "./Header.css";

function Header() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <h1 className="logo">
          <Link to="/" className="logo-text">
            🎬 Movie Log
          </Link>
        </h1>

        <div className="fav-page-btn">
          <Link to="/favorites" title="즐겨찾기 이동">
            <img src={heartOutline} alt="즐겨찾기" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

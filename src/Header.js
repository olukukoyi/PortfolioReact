import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKing } from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-solid-svg-icons";
// import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

// Nav
function Header() {
  const navigate = useNavigate();

  function contactNavigation() {
    navigate("/contact");
  }
  function homeNavigation() {
    navigate("/");
  }

  return (
    <div id="header">
      <nav>
        <div className="logo">
          <h4>
            <span className="header__name">Olu Kukoyi</span>
            <FontAwesomeIcon className="fas fa-chess-king" icon={faChessKing} />
          </h4>
        </div>
        <ul className="nav-links">
          <li>
            <a
              onClick={homeNavigation}
              className="nav-links__down-animation nav-links__hover-effect--white"
            >
              .home()
            </a>
          </li>

          <li>
            <Link
              to="projects"
              smooth="true"
              duration={500}
              className="nav-links__down-animation nav-links__hover-effect--white"
            >
              .projects()
            </Link>
          </li>
          <li>
            <a
              onClick={contactNavigation}
              className="nav-links__up-animation nav-links__hover-effect--white"
            >
              .contact()
            </a>
          </li>
        </ul>
        {/* <div className="burger">  for burger sidebar
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div> */}
      </nav>
    </div>
  );
}

export default Header;

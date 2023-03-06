import "../styles/LandingPage.css";

import ProfileOptions from "../components/ProfileOptions";

import { Link, useNavigate } from "react-router-dom";

function activateHamburger() {
  let links = document.getElementById("links");
  if (links.style.display === "flex") {
    links.style.display = "none";
  } else {
    links.style.display = "flex";
  }
}

export default function LandingPage() {
  return (
    <div className="LandingPage backgroundImgContainer">
      <nav className="navbar">
        <div className="leftSide">
          <h1 className="logo">Cineclube.</h1>
          <div className="links" id="links">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#AboutUs" className="nav-link">
              Sobre Nós
            </a>
            <a href="#MovieSection" className="nav-link">
              Filme
            </a>
            <a href="#Team" className="nav-link">
              Equipe
            </a>
            <a href="#Footer" className="nav-link">
              Contato
            </a>
            <Link to="/login" className="nav-link login-system">Login</Link>
            <Link to="/register" className="nav-link login-system">Cadastrar-se</Link>
            
          </div>
        </div>

        <ProfileOptions />

        <div className="hamburger" onClick={activateHamburger}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>

      <div className="info">
        <p className="description">
          As portas do mundo cinematográfico estão abertas para você, conheça
          pessoas com o mesmo amor e paixão pelo cinema.
        </p>
        <button className="join">Junte-se ao clube</button>
      </div>
    </div>
  );
}

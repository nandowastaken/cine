import "../styles/LandingPage.css";

import ProfileOptions from "../components/ProfileOptions";

function activateHamburger() {
  var links = document.getElementById("links");
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
            <a href="" className="nav-link">
              Home
            </a>
            <a href="" className="nav-link">
              Sobre Nós
            </a>
            <a href="" className="nav-link">
              Filme
            </a>
            <a href="" className="nav-link">
              Equipe
            </a>
            <a href="" className="nav-link">
              Contato
            </a>
          </div>
        </div>

        <div className="profile">
          <ProfileOptions />
          <img src="../src/assets/profile.svg" alt="" />
        </div>

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

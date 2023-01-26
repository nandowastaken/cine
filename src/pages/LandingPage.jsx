import "../styles/LandingPage.css";

import ProfileOptions from "../components/ProfileOptions";

function clickProfile() {}

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="backgroundImgContainer"></div>

      <nav className="navbar">
        <h1 className="logo">Cineclube.</h1>
        <div className="links">
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

        <div className="profile">
          <ProfileOptions />
          <img src="../src/assets/profile.svg" alt="" onClick={clickProfile} />
        </div>

        <div className="hamburger">
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

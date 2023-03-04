import "../styles/ProfileOptions.css";
import { Link } from "react-router-dom";

export default function ProfileOptions(props) {
  return (
    <div className="profile">
      {
        (Object.keys(props.user).length)
          ? (
            <img src="../src/assets/profile.svg" alt="" />
          ) : (
            <>
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/register">Cadastrar-se</Link>
            </>
          )
      }
    </div>
    // <div className="ProfileOptions" id="profile-options">
    //   <div className="profileInfo">
    //     <img src="../src/assets/profile.svg" alt="" className="profileImage" />

    //     <div className="userInfo">
    //       <p className="name">Name</p>
    //       <p className="username">@Username</p>
    //     </div>
    //   </div>

    //   <div className="options">
    //     <Link to="/login" className="option">
    //       Login
    //     </Link>

    //     <Link to="/register" className="option">
    //       Cadastrar-se
    //     </Link>

    //     <a href="" className="option">
    //       Sair
    //     </a>
    //   </div>
    // </div>
  );
}

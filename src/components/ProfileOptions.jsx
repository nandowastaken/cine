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
  );
}

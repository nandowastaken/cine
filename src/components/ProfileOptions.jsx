import "../styles/ProfileOptions.css";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

export default function ProfileOptions() {
  const user = useSelector(state => state.user.value);

  return (
    <div className="profile">
      {
        (user)
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

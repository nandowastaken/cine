import "../styles/ProfileOptions.css";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { toggleProfileOptions } from '../features/user/userSlice';

export default function ProfileOptions() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.value);
  const profileVisibility = useSelector(state => state.user.profileOptions);

  return (
    <div className="profile" onClick={(ev) => ev.stopPropagation()}>
      {
        (user)
          ? (
            <img src="../src/assets/profile.svg" alt="" onClick={() => {
              dispatch(toggleProfileOptions());
            }} />
          ) : (
            <>
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/register">Cadastrar-se</Link>
            </>
          )
      }
      {
        (user && profileVisibility)
          ? (
            <div className="ProfileOptions">
              <span className="username">@{user}</span>

              <div className="options">
                <span className="option">Sair</span>
              </div>
            </div>
          )
          : null
      }
    </div>
  );
}

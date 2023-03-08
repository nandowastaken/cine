import "../styles/ProfileOptions.css";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setUser, toggleProfileOptions } from '../features/user/userSlice';

import axios from '../app/axios';

export default function ProfileOptions() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.value);
  const profileVisibility = useSelector(state => state.user.profileOptions);

  return (
    <div className="profile" onClick={(ev) => ev.stopPropagation()}>
      {
        (user)
          ? (
            <img src="https://raw.githubusercontent.com/nandowastaken/cine/eb4909000d3bb030e59875c0e714b7611a1a1529/src/assets/profile.svg" alt="" onClick={() => {
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
                <span className="option" onClick={async () => {
                  await axios.get('/logout');
                  dispatch(setUser(''));
                }}>Sair</span>
              </div>
            </div>
          )
          : null
      }
    </div>
  );
}

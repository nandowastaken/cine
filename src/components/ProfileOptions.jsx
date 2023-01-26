import "../styles/ProfileOptions.css";

export default function ProfileOptions() {
  return (
    <div className="ProfileOptions">
      <div className="profileInfo">
        <img src="../src/assets/profile.svg" alt="" className="profileImage" />
        <div className="userInfo">
          <p className="name">Name</p>
          <p className="username">@Username</p>
        </div>
      </div>

      <div className="options">
        <a href="" className="option">
          Login
        </a>
        <a href="" className="option">
          Cadastrar-se
        </a>
        <a href="" className="option">
          Sair
        </a>
      </div>
    </div>
  );
}

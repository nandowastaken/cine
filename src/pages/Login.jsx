import "../styles/Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="Login">
      <div className="img-login"></div>

      <div className="login">
        <h1 className="welcomeBack">Bem-vindo de volta :)</h1>
        <form className="loginForm">
          <div className="formContainer">
            <label for="username" className="label">
              Usuário
            </label>
            <input type="text" id="username" name="username" />
          </div>

          <div className="formContainer">
            <label for="password" className="label">
              Senha
            </label>
            <input type="password" id="password" name="password" />
          </div>

          <input type="submit" className="loginButton" value="Login" />
          <Link to="/register" className="signUp">
            Não tem uma conta?
          </Link>
        </form>
      </div>
    </div>
  );
}

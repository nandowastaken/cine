import "../styles/Register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="Register">
      <div className="img"></div>

      <div className="register">
        <h1 className="welcomeBack">Pronto para se juntar a nós?</h1>
        <form className="registerForm">
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

          <input type="submit" className="registerButton" value="Cadastrar" />
          <Link to="/login" className="signIn">
            Já tem uma conta?
          </Link>
        </form>
      </div>
    </div>
  );
}

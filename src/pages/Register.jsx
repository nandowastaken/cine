import "../styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "../app/axios";

export default function Register() {
  const navigate = useNavigate();

  const [ user, setUser ] = useState();
  const [ password, setPassword ] = useState();

  return (
    <div className="Register">
      <div className="img"></div>

      <div className="register">
        <h1 className="welcomeBack">Pronto para se juntar a nós?</h1>

        <form 
          className="registerForm"
          onSubmit={async (ev) => {
            ev.preventDefault();
            
            try {
              await axios.post('/cadastrar', {
                user,
                password
              });
              navigate('/');
            } catch (error) {
              console.log(error);
            }
          }}>
          <div className="formContainer">
            <label htmlFor="username" className="label">Usuário</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              onChange={(ev) => {
                setUser(ev.target.value);
              }}
            />
          </div>

          <div className="formContainer">
            <label htmlFor="password" className="label">Senha</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              onChange={(ev) => {
                setPassword(ev.target.value);
              }}
            />
          </div>

          <input 
            type="submit" 
            className="registerButton" 
            value="Cadastrar" 
          />

          <Link to="/login" className="signIn">
            Já tem uma conta?
          </Link>
        </form>
      </div>
    </div>
  );
}

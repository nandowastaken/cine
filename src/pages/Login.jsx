import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from '../app/axios';

import "../styles/Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [ user, setUser ] = useState();
  const [ password, setPassword ] = useState();

  return (
    <div className="Login">
      <div className="img-login"></div>

      <div className="login">
        <h1 className="welcomeBack">Bem-vindo de volta :)</h1>

        <form 
          className="loginForm"
          onSubmit={async (ev) => {
            ev.preventDefault();
            
            try {
              await axios.post('/login', {
                user,
                password,
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

          <input type="submit" className="loginButton" value="Login" />

          <Link to="/register" className="signUp">
            Não tem uma conta?
          </Link>
        </form>
      </div>
    </div>
  );
}

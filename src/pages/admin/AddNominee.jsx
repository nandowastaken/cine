import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

function AddNominee() {
  const location = useLocation();
  const state = (location.state)
    ? location.state
    : {}

  const navigate = useNavigate();

  useEffect(() => {
    if (!Object.keys(state).length) navigate('/admin');
  });

  const [ nominated, setNominated ] = useState();
  const [ film, setFilm ] = useState();
  const [ errorMessage, setErrorMessage ] = useState();
  
  return (
    <form
      method="post"
      className="formAddRecord"
      onSubmit={async (ev) => {
        ev.preventDefault();
        setErrorMessage('');

        try {
          await axios.post(
            'https://deisantix-super-space-parakeet-xqrgrqj7vvv2pjq-3000.preview.app.github.dev/adicionarIndicadoOscar',
            {
              nominated,
              film,
              category: state.id
            }
          );
          navigate(`/admin/categoriesOscar/${state.id}`, { state: state });
        } catch (error) {
          if (error.code && error.code === 'ERR_BAD_REQUEST')
            setErrorMessage(JSON.parse(error.request.response).erro);
        }
      }}>
      <legend>Adicionar indicado para {state.category}</legend>

      <fieldset>
        <input
          name="nominated"
          placeholder="Indicado"
          onChange={(ev) => {
            setNominated(ev.target.value);
          }}
        />
        <input
          name="film"
          placeholder="Filme"
          onChange={(ev) => {
            setFilm(ev.target.value);
          }}
        />
      </fieldset>

      <button
        type="submit">
        Enviar
      </button>

      <span className="errorMessage">{ errorMessage }</span>
    </form>
  );
}

export default AddNominee;
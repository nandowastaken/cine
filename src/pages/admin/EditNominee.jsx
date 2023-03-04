import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../app/axios";

function EditNominee() {
  const oscar = useLocation().state;
  const navigate = useNavigate();

  const [ nominated, setNominated ] = useState(oscar.nominated);
  const [ film, setFilm ] = useState(oscar.film);
  const [ errorMessage, setErrorMessage ] = useState();
  const [ imageInputActive, setImageInputActive ] = useState(false);
  const [ imageLink, setImageLink ] = useState(oscar.image);

  const imageInput = useRef(null);

  return (
    <form 
      method="put"
      className="formAddRecord"
      onSubmit={async (ev) => {
        ev.preventDefault();
        setErrorMessage('');

        try {
          await axios.put('/atualizarIndicadoOscar', {
            id: oscar.id,
            nominated,
            film,
            image: imageLink
          });
          navigate(`/admin/categoriesOscar/${oscar.CategoryOscarId}`, { state: oscar.CategoryOscar });
        } catch (error) {
          if (error.code && error.code === 'ERR_BAD_REQUEST')
            setErrorMessage(JSON.parse(error.request.response).erro);
        }

        const updatedNominee = {
          nominated: nominated,
          film: film,
          image: imageLink
        };
        
      }}>
      <legend>Editar indicado para {oscar.CategoryOscar.category}</legend>

      <div className="editImage" onClick={() => {
        setImageInputActive(true);
      }}>
        {
          (imageLink)
            ? (
              <img src={imageLink} />
            )
            : <i className="material-icons-outlined">add_a_photo</i>
        }
      </div>
      
      {
        (imageInputActive)
          ? (
            <fieldset>
              <input 
                name="imageLink" 
                placeholder="Link da imagem" 
                ref={imageInput}
              />
              <button onClick={(ev) => {
                ev.preventDefault();
                setImageLink(imageInput.current.value);
                setImageInputActive(false);
              }}>Set Photo</button>
            </fieldset>
          )
          : null
      }

      <fieldset>
        <input
          name="nominated"
          placeholder="Indicado"
          value={nominated}
          onChange={(ev) => {
            setNominated(ev.target.value);
          }}
        />
        <input
          name="film"
          placeholder="Filme"
          value={film}
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

export default EditNominee;
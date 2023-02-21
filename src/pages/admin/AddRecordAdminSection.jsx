import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

import '../../styles/admin/AddRecordAdminSection.css';

function AddRecordAdminSection() {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const [ errorMessage, setErrorMessage ] = useState();
  
  const getForm = () => {
    if (pathname.includes('categoriesOscar')) {
      const [ category, setCategory ] = useState();
      const [ previousCategory, setPreviousCategory ] = useState();
      const [ nextCategory, setNextCategory ] = useState();

      return (
        <form
          method="post" 
          className="formAddRecord"
          onSubmit={async (ev) => {
            ev.preventDefault();
            setErrorMessage('');

            try {
              await axios.post(
                'https://deisantix-super-space-parakeet-xqrgrqj7vvv2pjq-3000.preview.app.github.dev/adicionarCategoriaOscar',
                {
                  category,
                  previousCategory,
                  nextCategory
                }
              );
              navigate('/admin/categoriesOscar');
            } catch (error) {
              if (error.code && error.code === 'ERR_BAD_REQUEST') 
                setErrorMessage(JSON.parse(error.request.response).erro);
            }
          }}>
          <legend>Adicionar Categoria do Óscar</legend>

          <fieldset>
            <input 
              name="category"
              placeholder="Categoria" 
              onChange={(ev) => {
                setCategory(ev.target.value);
              }} 
            />
          </fieldset>

          <fieldset>
            <input 
              name="previousCategory" 
              placeholder="Categoria Anterior" 
              onChange={(ev) => {
                setPreviousCategory(ev.target.value);
              }}  
            />
            <input 
              name="nextCategory" 
              placeholder="Próxima Categoria" 
              onChange={(ev) => {
                setNextCategory(ev.target.value);
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
  };

  return (
    <>
      { getForm() }
    </>
  )
}

export default AddRecordAdminSection;
import React from "react";
import { useLocation, Form } from "react-router-dom";

function AddRecordAdminSection() {
  const location = useLocation();
  const splitPathname = location.pathname.split('/');
  const api = splitPathname[splitPathname.length - 1];
  
  const getForm = () => {
    if (api === 'categoryOscar') {
      return (
        <Form method="post">
          <legend>Adicionar Categoria do Óscar</legend>

          <input name="category" placeholder="Categoria" />
          <input name="previousCategory" placeholder="Categoria Anterior" />
          <input name="nextCategory" placeholder="Próxima Categoria" />

          <button type="submit">Enviar</button>
        </Form>
      );
    }
  };

  return (
    <div>
      { getForm() }
    </div>
  )
}

export default AddRecordAdminSection;
import React from "react";
import { useLoaderData, Link } from "react-router-dom";

function Categories() {
  const categories = useLoaderData();

  return (
    <>
      <table className="adminSectionTable">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Anterior</th>
            <th>Próxima</th>
            <th>Indicações</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            (categories.length)
              ? categories.map(el => (
                <tr key={ el.id }>
                  <td>{ el.category }</td>
                  <td>{ el.previousCategory }</td>
                  <td>{ el.nextCategory }</td>
                  <td>
                    <Link to={`/admin/categoriesOscar/${el.id}`} state={el}>Ver</Link>
                  </td>
                  <td className="editRecord">
                    <i className="material-icons-outlined">edit</i>
                  </td>
                </tr>
              ))
              : <span>Nenhuma categoria cadastrada</span>
          }
        </tbody>
      </table>

      <Link
        className="material-icons-outlined addRecord"
        to="/admin/categoriesOscar/add"
      >add</Link>
    </>
  );
}

export default Categories;
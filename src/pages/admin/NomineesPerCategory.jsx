import React, { useEffect } from "react";
import { 
  Link, 
  useLoaderData, 
  useLocation, 
  useNavigate 
} from "react-router-dom";

function NomineesPerCategory() {
  const location = useLocation();
  const category = (location.state)
    ? location.state
    : {};
  const navigate = useNavigate();
  useEffect(() => {
    if (!Object.keys(category).length) navigate('/admin'); 
  });
  const nominees = useLoaderData();

  return (
    <>
      <Link to='/admin/categoriesOscar'>Voltar</Link>

      <div className="categoryNominees">
        <span>Id: {category.id}</span>
        <span>Categoria: { category.category }</span>
      </div>

      {
        (nominees.length)
          ? (
            <table className="adminSectionTable">
              <thead>
                <tr>
                  <th>Indicação</th>
                  <th>Filme</th>
                  <th></th>
                  <th>Votos</th>
                </tr>
              </thead>

              <tbody>
                {nominees.map(el => (
                  <tr key={el.id}>
                    <td>{ el.nominated }</td>
                    <td>{ el.film }</td>
                    <td onClick={() => {
                      navigate(
                        `/admin/categoriesOscar/${category.id}/edit/${el.id}`, 
                        {state: el}
                      )
                    }}>
                      <i className="material-icons-outlined">edit</i>
                    </td>
                    <td>
                      <Link 
                        to={`/admin/categoriesOscar/${category.id}/${el.id}/votes`}
                        state={el}>
                        { el.votes.length }
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
          : <span>Nenhuma indicação cadastrada nessa categoria</span>
      }

      <Link 
        to='add' 
        className="material-icons-outlined addRecord"
        state={category}
      >add</Link>
    </>
  );
}

export default NomineesPerCategory;
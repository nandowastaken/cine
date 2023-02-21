import React from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";

import '../../styles/admin/AdminSection.css';

function AdminSection() {
  const sections = useLoaderData();
  const pathname = useLocation().pathname;

  const loadSections = () => {
    if (!sections) {
      return (
        <div>
          <Link to="/admin/categoriesOscar">Oscar</Link>
        </div>
      );
    } else if (pathname.includes('categoriesOscar')) {
      const categories = (sections.length)
        ? sections.map(el => (
          <tr key={ el.id }>
            <td>{ el.category }</td>
            <td>{ el.previousCategory }</td>
            <td>{ el.nextCategory }</td>
            <td>Ver</td>
            <td className="editRecord">
              <i className="material-icons-outlined">edit</i>
            </td>
          </tr>
        ))
        : (
          <span>Nenhuma categoria cadastrada</span>
        );

      return (
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
            { categories }
          </tbody>
        </table>
      );
    }
  };
  
  return (
    <section className="adminSection">
      { loadSections() }

      {
        (sections)
          ? (
            <Link
              className="material-icons-outlined addRecord"
              to="/admin/categoriesOscar/add"
            >add</Link>
          )
          : null
      }
    </section>
  );
}

export default AdminSection;
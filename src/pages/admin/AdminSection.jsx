import React from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";

function AdminSection() {
  const sections = useLoaderData();

  const loadSections = () => {
    if (!sections)
      return (
        <div>
          <Link to="/admin/categoriesOscar">Oscar</Link>
        </div>
      );
    else
      return (
        <div>
          { sections.length ? (
            sections.map(el => (
              <Link>{ el.category }</Link>
            ))
          ) : (
            <span>Nenhuma categoria cadastrada</span>
          )}
        </div>
      );
  };
  
  return (
    <div>
      <section className="adminSection">
        { loadSections() }
      </section>
      
      <Link
        className="material-icons-outlined"
        to="/admin/add/categoryOscar"
      >add</Link>
    </div>
  );
}

export default AdminSection;
import React from "react";
import { Outlet } from "react-router-dom";

import '../../styles/admin/HomeAdmin.css';

function HomeAdmin() {

  return (
    <div className="adminConteiner">
      <header className="adminHeader">
        <h1>Cineclube.<span>admin</span></h1>
      </header>

      <div className="adminSection">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeAdmin;
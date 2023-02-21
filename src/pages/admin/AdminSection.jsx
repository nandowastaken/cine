import React from "react";
import { Link } from "react-router-dom";

import '../../styles/admin/AdminSection.css';

function AdminSection() {
  return (
    <div>
      <Link to="/admin/categoriesOscar">Oscar</Link>
    </div>
  );
}

export default AdminSection;
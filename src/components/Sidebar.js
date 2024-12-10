import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isExpanded, toggleSidebar }) => {
  return (
    <div>
      {/* Botón de toggle */}
      <button className="btn btn-primary" onClick={toggleSidebar} style={{ zIndex: 100 }}>
        {isExpanded ? 'Cerrar Sidebar' : 'Abrir Sidebar'}
      </button>

      {/* Sidebar */}
      <nav className={`sidebar-nav ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <ul id="sidebarnav">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/manage/security/users">Usuarios</Link></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

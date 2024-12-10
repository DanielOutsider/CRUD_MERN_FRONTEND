import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'; // Sidebar para administración
import Header from '../components/Header'; // Header para administración
import './DashboardLayout.css';

const AdminLayout = ({ children }) => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true); // Mantener el estado localmente
  
    const toggleSidebar = () => {
      setIsSidebarExpanded(!isSidebarExpanded); // Cambiar el estado localmente
    };
  
    return (
      <div className="dashboard-container">
        <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Header />
          <div className={`content-wrapper ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
            {children}
          </div>
        </div>
      </div>
    );
  };

export default AdminLayout;

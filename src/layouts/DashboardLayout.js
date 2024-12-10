import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './DashboardLayout.css';

const DashboardLayout = ({ children }) => {
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

export default DashboardLayout;

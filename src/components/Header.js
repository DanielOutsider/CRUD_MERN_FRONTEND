import React from 'react';
import { Bell, MessageSquare } from 'lucide-react';
import './Header.css'; // Estilos personalizados

const Header = () => {
  return (
    <header className="topbar">
        {/* Logo */}
        <div className='logo'>

        </div>

        {/* Header actions */}
        <ul className="navbar-nav-right">
          <li className="btn btn-icon">
            <Bell size={20} />
          </li>
          <li className="btn btn-icon">
            <MessageSquare size={20} />
          </li>
          <li className="btn btn-icon">
            <img 
              src="/api/placeholder/32/32" 
              alt="Profile" 
              className="rounded-circle w-8 h-8"
            />
          </li>
        </ul>
    </header>
  );
};

export default Header;

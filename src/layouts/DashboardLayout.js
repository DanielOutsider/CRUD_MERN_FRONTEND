import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from '../components/Sidebar'; // Componente de Sidebar
import Header from '../components/Header'; // Componente de Header

const DashboardLayout = ({ children }) => {
    return (
        <Container fluid>
            <Header />
            <div className="dashboard-container">
                <Sidebar />
                <main className="content">
                    {children}
                </main>
            </div>
        </Container>
    );
};

export default DashboardLayout;

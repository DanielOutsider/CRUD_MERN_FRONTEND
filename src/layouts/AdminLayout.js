import React from 'react';
import { Container } from 'react-bootstrap';
import AdminSidebar from '../components/AdminSidebar'; // Sidebar para administración
import AdminHeader from '../components/AdminHeader'; // Header para administración

const AdminLayout = ({ children }) => {
    return (
        <Container fluid>
            <AdminHeader />
            <div className="admin-container">
                <AdminSidebar />
                <main className="content">
                    {children}
                </main>
            </div>
        </Container>
    );
};

export default AdminLayout;

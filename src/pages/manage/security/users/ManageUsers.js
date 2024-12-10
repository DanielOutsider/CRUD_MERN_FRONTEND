import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import AdminLayout from '../../../../layouts/AdminLayout';
import FilterUsersForm from './FilterUsersForm';
import UserTable from './UserTable';

const ManageUsers = () => {
    return (
        <AdminLayout>

            <h2>Administrar Usuarios</h2>
            <Breadcrumb className='mb-5'>
                <Breadcrumb.Item href="#">Tablero</Breadcrumb.Item>
                <Breadcrumb.Item active>Mi Blog</Breadcrumb.Item>
            </Breadcrumb>
            
            
            {/* Contenido para administrar usuarios */}
            <FilterUsersForm />
            <UserTable />
        </AdminLayout>
    );
};

export default ManageUsers;

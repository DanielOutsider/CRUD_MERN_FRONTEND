import React from 'react';
import { Table, Button } from 'react-bootstrap';

const UserTable = () => {
    const users = [
        { id: 1, username: 'avaldés@ava-inc.com', fullName: 'sfasdf antonio', email: 'avaldés@ava-inc.com', role: 'Editor' },
        { id: 2, username: 'daniel.chj18@gmail.com', fullName: 'dasd daniek', email: 'daniel.chj18@gmail.com', role: 'Cobranza' },
        { id: 3, username: 'prof@test.com', fullName: 'sor sr profe', email: 'prof@test.com', role: 'Profesor' },
        { id: 4, username: 'daniel_cj18@hotmail.com', fullName: 'chj dan', email: 'daniel_cj18@hotmail.com', role: 'Administrador de Subsidiaria' },
    ];

    return (
        <div className="table-responsive mt-3">

            <Table id="gridUsers" striped bordered hover responsive className="stylish-table mt-2">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre de usuario</th>
                        <th>Nombre completo</th>
                        <th>Correo electrónico</th>
                        <th>Rol</th>
                        <th className="text-end">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.fullName}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td className="text-end">

                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default UserTable;

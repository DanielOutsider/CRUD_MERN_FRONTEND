import React, {useEffect} from 'react';
import { Breadcrumb } from 'react-bootstrap';
import DashboardLayout from '../layouts/DashboardLayout';

const UserDashboard = () => {

    // Solicitar permiso para notificaciones
    const requestNotificationPermission = async () => {
        if (!("Notification" in window)) {
            alert("Tu navegador no soporta notificaciones.");
            return;
        }

        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            console.log("Permiso de notificaciones concedido.");
        } else {
            console.log("Permiso de notificaciones denegado.");
        }
    };

    useEffect(() => {
        // Llamamos a la función cuando la aplicación se carga
        requestNotificationPermission();
    }, []);  

    return (
        <DashboardLayout>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Tablero</Breadcrumb.Item>
                <Breadcrumb.Item active>Mi Blog</Breadcrumb.Item>
            </Breadcrumb>
            
            <h2>Dashboard de Usuario</h2>
            {/* Contenido del dashboard aquí */}
        </DashboardLayout>
    );
};

export default UserDashboard;

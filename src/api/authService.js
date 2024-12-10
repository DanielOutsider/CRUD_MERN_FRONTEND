// src/services/authService.js
import axios from 'axios';
import { handleErrorResponse } from '../utils/errorHandler'; // Importamos la función


const API_URL = 'http://localhost:3000/api/auth/login';

export const login = async (email, password) => {
    try {
        const response = await axios.post(API_URL, { email, password });
        if (response.data.status === 'success') {
            localStorage.setItem('token', response.data.token);  // Guardamos el token en el localStorage
            return response.data; // Retornamos la respuesta exitosa
        } else {
            // Si no es un éxito, retornamos el mensaje de error
            return handleErrorResponse({response});
        }
        //throw new Error(response.data.alert);
    } catch (error) {
        return handleErrorResponse(error); // Llamamos a la función para manejar el error
        
    }
};

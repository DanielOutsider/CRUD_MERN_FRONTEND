// src/utils/errorHandler.js

export const handleErrorResponse = (error) => {
    if (error.response && error.response.data) {
        const { status, errors, alert } = error.response.data;
        if (status === 'validator') {
            // Retornamos los mensajes de error si hay validaciones fallidas
            const errorMessages = Object.values(errors).map(err => err.msg);
            const errorHtml = Object.values(errors).length > 0 ?  `<ul>${Object.values(errors).map(er => `<li>${er.msg}</li>`).join('')}</ul>` : '';
            
            return { errorHtml: errorHtml, errors: errors };
        } else if(status === 'error') {
            return { errorHtml: alert, errors, status  };
        }
    }
    // Retornamos un mensaje genérico para otros errores
    return { errors: ['Ocurrió un error inesperado.'] };
};

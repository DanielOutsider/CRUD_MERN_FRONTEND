// src/utils/validationUtil.js
export const handleValidationErrors = (errorResponse) => {
    const messages = [];
    
    if (errorResponse?.data?.status === 'validator') {
        const errors = errorResponse.data.errors;

        for (const field in errors) {
            if (errors[field].msg) {
                messages.push(errors[field].msg); // Agregamos el mensaje de error a la lista
            }
        }
    } else {
        messages.push('Ocurrió un error inesperado.'); // Mensaje por defecto
    }
    
    return messages;
};

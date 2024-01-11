import axios from '../utils/config/axios.config';

/**
 * Login method 
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
export const login = (email: string, password: string) => {
    let body = {
        email: email,
        password: password
    }

    //send
    return axios.post('/auth/login', body)
}

/**
 * register method
 * @param {string} name 
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
export const register = (name: string, email: string, password: string) => {
    let body = {
        name: name,
        email: email,
        password: password
    }

    //send
    return axios.post('/auth/register', body)
}
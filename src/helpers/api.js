import axios from 'axios';

const endpoints = {
    // development: 'http://chile-2.herokuapp.com',
    development: 'http://recuperaciones.herokuapp.com',
};

export const api = axios.create({
    baseURL: endpoints['development'],
    timeout: 20000,
});

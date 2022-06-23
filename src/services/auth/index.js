import axios from 'axios';
import { API_URL } from '../../config/index.js';

export const login = async (data) => {
    return axios.post(`${API_URL}/register`, data)
        .then(res => {
            return res.data;
        })
        .catch(error => error.response.data);
}

export const register = async (data) => {
    return axios.post(`${API_URL}/login`, data)
        .then(res => {
            return res.data;
        })
        .catch(error => {
            error.response.data
        });
}
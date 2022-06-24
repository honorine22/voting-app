import axios from 'axios';
import { API_URL } from '../../config/index.js';

export const login = async (data) => {
    console.log("Data: " + data);
    return axios.post(`${API_URL}/login`, data)
        .then(res => {
            return res.data;
        })
        .catch(error => error.response.data);
}

export const register = async (data) => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    };
    return axios.post(`${API_URL}/register`, data, config)
        .then(res => {
            return res.data;
        })
        .catch(error =>
            error.response.data
        );
}
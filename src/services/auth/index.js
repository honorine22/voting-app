import axios from 'axios';
import { API_URL } from '../../config/index.js';

export const login = async (data) => {
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

export const logout = async () => {
    localStorage.removeItem("token");
    const response = await axios.post(API_URL + "/logout");
    return response.data;
};
export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("token"));
};
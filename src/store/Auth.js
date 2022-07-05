import axios from 'axios';
import * as types from './types';
import { API_URL } from "../config";
export const Init = (token) => {
    return async dispatch => {
        if (token !== null) {
            dispatch({
                type: types.LOGIN_USER,
                payload: token,
            })
        }
    }
}

export const logoutService = () => {
    return async dispatch => {
        dispatch({
            type: types.LOGOUT,
            payload: null
        })
    }
}

export const registerService = (data) => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    };
    return async dispatch => {
        const res = await axios.post(`${API_URL}/register`, data, config);
        const userInfo = res.data;

        if (!userInfo.success) {
            throw new Error(userInfo.message);
        }
        dispatch({ type: types.REGISTER_USER, userInfo });
    };
};

export const loginService = (data) => {

    return async dispatch => {
        let res = await axios.post(`${API_URL}/login`, data);
        const userInfo = res.data;

        if (!res.success) {
            throw new Error(userInfo.message);
        }

        let user = {
            id: userInfo.id,
            username: userInfo.username,
            email: userInfo.email
        }
        let token = userInfo.token;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        dispatch({ type: types.LOGIN_USER, token, user });
    };
};
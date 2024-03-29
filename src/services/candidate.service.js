import axios from 'axios';
import { API_URL } from '../config';

export const registerAsCandidate = async (data) => {
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

export const vote = async (oid, cid) => {
    return axios.post(`${API_URL}/candidates/vote/${oid}/${cid}`)
        .then(res => {
            return res.data;
        })
        .catch(error => error.response.data);
}
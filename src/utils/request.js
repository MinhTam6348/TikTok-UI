import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, opyion = {}) => {
    const response = await request.get(path, opyion);
    return response.data;
};

export default request;

import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, opyion = {}) => {
    const response = await request.get(path, opyion);
    return response.data;
};

export default request;

import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: '/backend/api/v1',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export default AxiosInstance;

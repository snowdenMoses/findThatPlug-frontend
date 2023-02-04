import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1/users',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

export default AxiosInstance;
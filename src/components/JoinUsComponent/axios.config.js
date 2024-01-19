import axios from 'axios';


export const emailBU = axios.create({
    baseURL: 'http://localhost:3010',
});

import axios, { AxiosInstance } from 'axios';

class Api {
    axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:4000',
            timeout: 10000,
        });
    }
}

export default new Api();

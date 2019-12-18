import axios, { AxiosInstance, AxiosResponse } from 'axios';

class Api {
    axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:4000',
            timeout: 10000,
        });
    }

    signIn = async (email: string, password: string): Promise<AxiosResponse> => {
        return await this.axiosInstance.post(
            '/auth/signin',
            { email, password },
            {
                withCredentials: true,
            },
        );
    }
}

export default new Api();

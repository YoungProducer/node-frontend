import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { FetchSignUpCredentials } from '../../types/store/actionsCreators/auth/signup';
import { FetchSignInCredentials } from '../../types/store/actionsCreators';

class Api {
    axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:4000',
            timeout: 10000,
        });
    }

    signIn = async (credentials: FetchSignInCredentials): Promise<AxiosResponse> => {
        return await this.axiosInstance.post(
            '/auth/signin',
            { ...credentials },
            { withCredentials: true },
        );
    }

    signUp = async(credentials: FetchSignUpCredentials): Promise<AxiosResponse> => {
        return await this.axiosInstance.post(
            '/auth/signup',
            { ...credentials },
            { withCredentials: true },
        );
    }
}

export default new Api();

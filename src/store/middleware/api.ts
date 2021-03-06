import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { FetchSignUpCredentials } from '../../types/store/actionsCreators/auth/signup';
import { FetchSignInCredentials } from '../../types/store/actionsCreators';
import { FetchUserCredentials } from '../../types/store/actionsCreators/update/user';
import { FetchFindUserByEmailCredentials } from '../../types/store/actionsCreators/users/findByEmail';
import { FetchUpdateUserRootsCredentials } from '../../types/store/actionsCreators/update/userRoot';

class Api {
    axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:4000',
            timeout: 10000,
        });
    }

    signIn = async (credentials: FetchSignInCredentials): Promise<AxiosResponse> =>
        await this.axiosInstance.post(
            '/auth/signin',
            { ...credentials },
            { withCredentials: true })

    signUp = async(credentials: FetchSignUpCredentials): Promise<AxiosResponse> =>
        await this.axiosInstance.post(
            '/auth/signup',
            { ...credentials },
            { withCredentials: true })

    me = async(): Promise<AxiosResponse> =>
        await this.axiosInstance.get(
            '/auth/me',
            { withCredentials: true })

    refresh = async(): Promise<AxiosResponse> =>
        await this.axiosInstance.post(
            '/auth/refresh',
            {},
            { withCredentials: true })

    logout = async(): Promise<AxiosResponse> =>
        await this.axiosInstance.post(
            '/auth/logout',
            {},
            { withCredentials: true })

    logoutAll = async(): Promise<AxiosResponse> =>
        await this.axiosInstance.post(
            '/auth/logoutall',
            {},
            { withCredentials: true })

    updateUser = async(credentials: FetchUserCredentials): Promise<AxiosResponse> =>
        await this.axiosInstance.post(
            '/update/user',
            { fields: credentials },
            { withCredentials: true },
        )

    findUserByEmail = async({ email }: FetchFindUserByEmailCredentials) =>
        await this.axiosInstance.get(
            `/users/findByEmail/?filter=${email}`,
            {
                withCredentials: true,
            },
        )

    updateUserRoots = async(credentials: FetchUpdateUserRootsCredentials) =>
        await this.axiosInstance.patch(
            '/update/user/roots',
            {
                data: credentials,
            },
            { withCredentials: true },
        )
}

export default new Api();

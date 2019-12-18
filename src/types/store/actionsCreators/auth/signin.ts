import { IAction, ApiCredentials } from '../globalTypes';

export interface FetchSignInCredentials {
    email: string;
    password: string;
}

export interface FetchSignInAction extends IAction {}

export interface SuccessSignInCredentials {
    id: string;
    email: string;
    userName: string;
}

export interface SuccessSignInAction extends IAction {
    payload: SuccessSignInCredentials;
}

export interface FailureSignInCredentials {
    error: object;
}

export interface FailureSignInAction extends IAction {
    payload: FailureSignInCredentials;
}

export interface LoadingSignInCredentials {
    loading: boolean;
}

export interface LoadingSignInAction extends IAction {
    payload: LoadingSignInCredentials;
}

export type SigninActions = SuccessSignInAction | FailureSignInAction | LoadingSignInAction;

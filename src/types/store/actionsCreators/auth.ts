import { IAction, ApiCredentials } from './globalTypes';

export interface ISignUpCredentials extends ApiCredentials {
    email: string;
    userName?: string;
    password: string;
}

export interface ISignInCredentials extends ApiCredentials {
    email: string;
    password: string;
}

export interface ISignUpAction extends IAction {
    payload: any;
}

export interface ISignInAction extends IAction {
    payload: any;
}

export type AuthActions = ISignUpAction | ISignInAction;

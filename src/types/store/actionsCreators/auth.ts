import { IAction } from './globalTypes';

export interface ISignUpCredentials {
    email: string;
    userName?: string;
    password: string;
}

export interface ISignInCredentials {
    email: string;
    password: string;
}

export interface ISignUpAction extends IAction {
    payload: ISignUpCredentials;
}

export interface ISignInAction extends IAction {
    payload: ISignUpCredentials;
}

export type AuthActions = ISignUpAction | ISignInAction;

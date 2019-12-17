import { IAction, ApiCredentials } from './globalTypes';

export interface SignUpCredentials extends ApiCredentials {
    email: string;
    userName?: string;
    password: string;
}

export interface SignInCredentials extends ApiCredentials {
    email: string;
    password: string;
}

export interface RefreshCredentials extends ApiCredentials {
}

export interface MeCredentials extends ApiCredentials {
}

export interface SignUpAction extends IAction {
    payload: any;
}

export interface SignInAction extends IAction {
    payload: any;
}

export interface MeAction extends IAction {
    payload: any;
}

export interface RefreshAction extends IAction {
    payload: any;
}

export type AuthActions = SignUpAction | SignInAction | MeAction | RefreshAction;

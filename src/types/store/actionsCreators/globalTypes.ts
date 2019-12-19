import { Action } from 'redux';

export interface ApiCredentials {
    onSuccess?: Function;
    onFailure?: Function;
}

export type Method = 'post' | 'get' | 'put' | 'delete';

export interface IMeta {
    type: string;
    uri: string;
    method: Method;
}

export interface IAction extends Action, ApiCredentials {
    meta?: IMeta;
}

export interface LoadingCredentials {
    loading: boolean;
}

export interface LoadingAction extends IAction {
    payload: LoadingCredentials;
}

export interface FailureCredentials {
    error: object;
}

export interface FailureAction extends IAction {
    payload: FailureCredentials;
}

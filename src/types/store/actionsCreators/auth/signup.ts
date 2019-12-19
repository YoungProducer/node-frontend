import { IAction, LoadingAction, FailureAction } from '../globalTypes';

export interface FetchSignUpCredentials {
    email: string;
    password: string;
    userName?: string;
}

export interface FetchSignUpAction { }

export interface SuccessSignUpCredentials {
    email: string;
}

export interface SuccessSignUpAction extends IAction {
    payload: SuccessSignUpCredentials;
}

export { LoadingAction, LoadingCredentials } from '../globalTypes';
export type SignUpActions = SuccessSignUpAction | FailureAction | LoadingAction;

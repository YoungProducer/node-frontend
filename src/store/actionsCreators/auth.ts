import gql from 'graphql-tag';

// Custom imports
import {
    SIGNUP,
    SIGNIN,
    ME,
    REFRESH,
    SUCCESS_SIGNUP,
    SUCCESS_SIGNIN,
    SUCCESS_ME,
    SUCCESS_REFRESH,
} from '../actionsTypes/auth';
import {
    SignUpAction,
    SignInAction,
    MeAction,
    RefreshAction,
    SignUpCredentials,
    SignInCredentials,
    MeCredentials,
    RefreshCredentials,
} from '../../types/store/actionsCreators';

export const createSignUpAction = ({
    email,
    userName,
    password,
    onSuccess,
    onFailure,
}: SignUpCredentials): SignUpAction => ({
    type: SIGNUP,
    payload: {
        onFailure,
        onSuccess: createSubmitSignUpAction,
        data: { email, userName, password },
    },
    meta: {
        type: 'api',
        uri: 'http://localhost:4000/auth/signup',
        method: 'post',
    },
});

export const createSignInAction = ({
    email,
    password,
    onSuccess,
    onFailure,
}: SignInCredentials): SignInAction => ({
    type: SIGNIN,
    payload: {
        onFailure,
        onSuccess: createSubmitSignInAction,
        data: { email, password },
    },
    meta: {
        type: 'api',
        uri: 'http://localhost:4000/auth/signin',
        method: 'post',
    },
});

export const createMeAction = ({
    onFailure,
    onSuccess,
}: MeCredentials): MeAction => ({
    type: ME,
    payload: {
        onFailure,
        onSuccess,
    },
    meta: {
        type: 'api',
        uri: 'http://localhost:4000/auth/me',
        method: 'get',
    },
});

export const createRefreshAction = ({
    onFailure,
    onSuccess,
}: RefreshCredentials): RefreshAction => ({
    type: REFRESH,
    payload: {
        onFailure,
        onSuccess,
    },
    meta: {
        type: 'api',
        uri: 'http://localhost:4000/auth/refresh',
        method: 'post',
    },
});

export const createSubmitSignUpAction = () => ({
    type: SUCCESS_SIGNUP,
});

export const createSubmitSignInAction = () => ({
    type: SUCCESS_SIGNIN,
});

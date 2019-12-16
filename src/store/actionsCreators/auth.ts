import gql from 'graphql-tag';

// Custom imports
import {
    SIGNUP,
    SIGNIN,
    SUBMIT_SIGNUP,
    SUBMIT_SIGNIN,
} from '../actionsTypes/auth';
import {
    ISignUpAction,
    ISignInAction,
    ISignUpCredentials,
    ISignInCredentials,
} from '../../types/store/actionsCreators';

export const createSignUpAction = ({
    email,
    userName,
    password,
    onSuccess,
    onFailure,
}: ISignUpCredentials): ISignUpAction => ({
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
}: ISignInCredentials): ISignInAction => ({
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

export const createSubmitSignUpAction = () => ({
    type: SUBMIT_SIGNUP,
});

export const createSubmitSignInAction = () => ({
    type: SUBMIT_SIGNIN,
});

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
}: ISignUpCredentials): ISignUpAction => ({
    type: SIGNUP,
    payload: { email, userName, password },
    meta: {
        type: 'api',
        reqString: gql`mutation SignUp($email: String!, $password: String!, $userName: String) {
            signup(email: $email, password: $password, userName: $userName) {
                id,
                email,
                userName,
            }
        }`,
        reqType: 'mutation',
    },
});

export const createSignInAction = ({
    email,
    password,
}: ISignInCredentials): ISignInAction => ({
    type: SIGNIN,
    payload: { email, password },
    meta: {
        type: 'api',
        reqString: '', // Todo: // Complete
        reqType: 'mutation',
    },
});

export const createSubmitSignUpAction = () => ({
    type: SUBMIT_SIGNUP,
});

export const createSubmitSignInAction = () => ({
    type: SUBMIT_SIGNIN,
});

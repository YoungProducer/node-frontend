import { Dispatch } from 'redux';
import { AxiosResponse, AxiosError } from 'axios';

// Custom imports
import api from '../middleware/api';
import {
    FETCH_SIGNIN,
    SUCCESS_SIGNIN,
    FAILURE_SIGNIN,
    LOADING_SIGNIN,
} from '../actionsTypes/signin';
import {
    FetchSignInCredentials,
    FetchSignInAction,
    SuccessSignInCredentials,
    SuccessSignInAction,
    FailureSignInCredentials,
    FailureSignInAction,
    LoadingSignInCredentials,
    LoadingSignInAction,
    SigninActions,
} from '../../types/store/actionsCreators';

export const createSuccessSignInAction = ({
    id,
    email,
    userName,
}: SuccessSignInCredentials): SuccessSignInAction => ({
    type: SUCCESS_SIGNIN,
    payload: { id, email, userName },
});

export const createFailureSignInAction = ({
    error,
}: FailureSignInCredentials): FailureSignInAction => ({
    type: FAILURE_SIGNIN,
    payload: { error },
});

export const createLoadingSignInAction = ({
    loading,
}: LoadingSignInCredentials): LoadingSignInAction => ({
    type: LOADING_SIGNIN,
    payload: { loading },
});

export const createFetchSignInAction = ({
    email,
    password,
}: FetchSignInCredentials) => {
    console.log('here');
    return (dispatch: Dispatch<SigninActions>) => {
        dispatch(createLoadingSignInAction({ loading: true }));

        api.signIn(email, password)
            .then((response: AxiosResponse) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(createLoadingSignInAction({ loading: true }));

                return response;
            })
            .then((response: AxiosResponse) => response.data.json())
            .then((userData: SuccessSignInCredentials) => dispatch(createSuccessSignInAction({ ...userData })))
            .catch((error: AxiosError) => dispatch(createFailureSignInAction({ error })));
    };
};

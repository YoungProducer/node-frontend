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
    SigninActions,
} from '../../types/store/actionsCreators';

import {
    FailureCredentials,
    FailureAction,
    LoadingCredentials,
    LoadingAction,
} from '../../types/store/actionsCreators/globalTypes';

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
}: FailureCredentials): FailureAction => ({
    type: FAILURE_SIGNIN,
    payload: { error },
});

export const createLoadingSignInAction = ({
    loading,
}: LoadingCredentials): LoadingAction => ({
    type: LOADING_SIGNIN,
    payload: { loading },
});

export const createFetchSignInAction = ({
    email,
    password,
}: FetchSignInCredentials) => {
    return (dispatch: Dispatch<SigninActions>) => {
        dispatch(createLoadingSignInAction({ loading: true }));

        api.signIn({ email, password })
            .then((response: AxiosResponse) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(createLoadingSignInAction({ loading: false }));

                return response;
            })
            .then((response: AxiosResponse) => response.data.json())
            .then((userData: SuccessSignInCredentials) => dispatch(createSuccessSignInAction({ ...userData })))
            .catch((error: AxiosError) => dispatch(createFailureSignInAction({ error })));
    };
};

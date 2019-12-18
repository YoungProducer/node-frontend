import {
    SUCCESS_SIGNIN,
    FAILURE_SIGNIN,
    LOADING_SIGNIN,
} from '../actionsTypes/signin';
import { Handlers } from '../../types/store/reducers';
import { SigninActions, SuccessSignInAction, FailureSignInAction, LoadingSignInAction, FetchSignInAction } from '../../types/store/actionsCreators';

interface SignInInitialState {
    loading: boolean;
    loggedIn: boolean;
    id: string;
    email: string;
    userName: string;
}

const INITIAL_STATE: SignInInitialState = {
    loading: false,
    loggedIn: false,
    id: null,
    email: null,
    userName: null,
};

const HANDLERS: Handlers = {
    [SUCCESS_SIGNIN]: (state: SignInInitialState, { payload: { id, userName, email } }: SuccessSignInAction) => ({
        ...state,
        id,
        email,
        userName,
        loggedIn: true,
    }),
    [FAILURE_SIGNIN]: (state: SignInInitialState, { payload: { error } }: FailureSignInAction) => {
        console.log(error);
        return { ...state };
    },
    [LOADING_SIGNIN]: (state: SignInInitialState, { payload: { loading } }: LoadingSignInAction) => ({
        ...state,
        loading,
    }),
};

export default (state: SignInInitialState = INITIAL_STATE, action: SigninActions) =>
    HANDLERS[action.type] ? HANDLERS[action.type](state, action) : state;

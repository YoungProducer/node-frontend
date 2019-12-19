// Import Action types
import {
    SUCCESS_SIGNUP,
    FAILURE_SIGNUP,
    LOADING_SIGNUP,
} from '../actionsTypes/signup';

// Import interfaces
import {
    Handlers,
} from '../../types/store/reducers';

import {
    FailureAction,
    LoadingAction,
} from '../../types/store/actionsCreators/globalTypes';

import {
    SuccessSignUpAction,
    SignUpActions,
} from '../../types/store/actionsCreators/auth/signup';

interface InitialState {
    loading: boolean;
    email: string;
}

const INITIAL_STATE: InitialState = {
    loading: false,
    email: null,
};

const HANDLERS: Handlers = {
    [SUCCESS_SIGNUP]: (state: InitialState, action: SuccessSignUpAction) => ({
        ...state,
        email: action.payload.email,
    }),
    [FAILURE_SIGNUP]: (state: InitialState, action: FailureAction) => {
        console.log(action.payload.error);
        return { ...state };
    },
    [LOADING_SIGNUP]: (state: InitialState, action: LoadingAction) => ({
        ...state,
        loading: action.payload.loading,
    }),
};

export default (state: InitialState = INITIAL_STATE, action: SignUpActions) =>
    HANDLERS[action.type] ? HANDLERS[action.type](state, action) : state;

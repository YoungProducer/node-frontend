import {
    SIGNUP,
    SIGNIN,
    SUBMIT_SIGNIN,
    SUBMIT_SIGNUP,
} from '../actionsTypes/auth';

// Import types
import {
    AuthInitialState,
    Handlers,
} from '../../types/store/reducers';
import {
    AuthActions,
} from '../../types/store/actionsCreators';

const INITIAL_STATE: AuthInitialState = {
    loggedIn: false,
    signedUp: false,
};

const HANDLERS: Handlers = {
    [SIGNUP]: (state: AuthInitialState, action: AuthActions) => ({
        ...state,
    }),
    [SIGNIN]: (state: AuthInitialState, action: AuthActions) => ({
        ...state,
    }),
    [SUBMIT_SIGNUP]: (state: AuthInitialState) => ({
        ...state,
        signedUp: true,
    }),
    [SUBMIT_SIGNIN]: (state: AuthInitialState) => ({
        ...state,
        loggedIn: true,
    }),
};

export default (state: AuthInitialState = INITIAL_STATE, action: AuthActions) =>
    HANDLERS[action.type] ? HANDLERS[action.type](state, action) : state;

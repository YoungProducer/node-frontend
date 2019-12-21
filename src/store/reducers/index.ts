import { combineReducers } from 'redux';

import SignInReducer from './signin';
import SignUpReducer from './signup';
import MeReducer from './me';
import RefreshReducer from './refresh';
import LogoutReducer from './logout';

export default combineReducers({
    signin: SignInReducer,
    signup: SignUpReducer,
    me: MeReducer,
    refresh: RefreshReducer,
    logout: LogoutReducer,
});

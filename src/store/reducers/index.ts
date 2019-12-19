import { combineReducers } from 'redux';

import SignInReducer from './signin';
import SignUpReducer from './signup';

export default combineReducers({
    signin: SignInReducer,
    signup: SignUpReducer,
});

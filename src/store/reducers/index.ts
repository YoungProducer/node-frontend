import { combineReducers } from 'redux';

import SignInReducer from './signin';

export default combineReducers({
    signin: SignInReducer,
});

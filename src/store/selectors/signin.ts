import { SignInInitialState } from '../reducers/signin';

export const getLoggedIn = (state: SignInInitialState) => state.loggedIn;

export const getSignInLoading = (state: SignInInitialState) => state.loading;

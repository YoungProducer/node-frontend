import { SignUpInitialState } from "../reducers/signup";

export const getSignUpLoading = (state: SignUpInitialState) => state.loading;

export const getEmailAfterSignUp = (state: SignUpInitialState) => state.email;

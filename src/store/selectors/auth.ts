import { AuthInitialState } from '../../types/store/reducers';

export const getLoggedIn = (state: AuthInitialState) => {
    console.log(state);
    return state.loggedIn;
};

// import {
//     SIGNUP,
//     SIGNIN,
//     ME,
//     REFRESH,
//     SUCCESS_SIGNIN,
//     SUCCESS_SIGNUP,
//     SUCCESS_ME,
//     SUCCESS_REFRESH,
// } from '../actionsTypes/signin';

// // Import types
// import {
//     AuthInitialState,
//     Handlers,
// } from '../../types/store/reducers';
// import {
//     AuthActions,
// } from '../../types/store/actionsCreators';

// const INITIAL_STATE: AuthInitialState = {
//     loggedIn: false,
//     signedUp: false,
// };

// const HANDLERS: Handlers = {
//     [SIGNUP]: (state: AuthInitialState, action: AuthActions) => ({
//         ...state,
//     }),
//     [SIGNIN]: (state: AuthInitialState, action: AuthActions) => ({
//         ...state,
//     }),
//     [ME]: (state: AuthInitialState, action: AuthActions) => ({
//         ...state,
//     }),
//     [REFRESH]: (state: AuthInitialState, action: AuthActions) => ({
//         ...state,
//     }),
//     [SUCCESS_SIGNUP]: (state: AuthInitialState) => ({
//         ...state,
//         signedUp: true,
//     }),
//     [SUCCESS_SIGNIN]: (state: AuthInitialState) => ({
//         ...state,
//         loggedIn: true,
//     }),
//     [SUCCESS_ME]: (state: AuthInitialState) => ({
//         ...state,
//         loggedIn: true,
//     }),
//     [SUCCESS_REFRESH]: (state: AuthInitialState) => ({
//         ...state,
//     }),
// };

// export default (state: AuthInitialState = INITIAL_STATE, action: AuthActions) =>
//     HANDLERS[action.type] ? HANDLERS[action.type](state, action) : state;

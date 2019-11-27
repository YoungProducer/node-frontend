import {
    Store,
    Action,
    Dispatch,
} from 'redux';

export const loggerMiddleware = (store: Store) => (next: Dispatch) => (action: Action) => {
    console.log(action);
    next(action);
};

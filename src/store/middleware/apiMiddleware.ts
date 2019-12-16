import {
    Store,
    AnyAction,
    Dispatch,
} from 'redux';

import api from './api';

export default (store: Store) => (next: Dispatch) => (action: AnyAction) => {
    if (!action.meta || action.meta.type !== 'api') {
        return next(action);
    }

    const { uri, method, payload: { data, onSuccess, onFailure } } = action;

    api.axiosInstance({
        method,
        data,
        url: uri,
        withCredentials: true,
    }).then(response => {
        next(onSuccess(response));
    }).catch(error => {
        // next(onFailure(error));
        console.log(error);
    });
};

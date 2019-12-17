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

    const { meta: { uri, method }, payload: { data, onSuccess, onFailure } } = action;

    api.axiosInstance({
        method,
        data,
        url: uri,
        withCredentials: true,
    }).then(response => {
        console.log(response);
        return next(onSuccess(response));
    }).catch(error => {
        // return next(onFailure(error));
        console.log(error);
    });
};

import {
    Store,
    AnyAction,
    Dispatch,
} from 'redux';
import {
    useMutation,
    useQuery,
} from 'react-apollo';

export default (store: Store) => (next: Dispatch) => (action: AnyAction) => {
    if (!action.meta || action.meta.type !== 'api') {
        return next(action);
    }

    const { reqString, reqType } = action.meta;

    if (reqType === 'mutation') {
        const [mutation, { loading, error, data }] = useMutation(reqString, {
            variables: action.payload,
        });

        mutation()
            .then(resp => {
                console.log(resp);
                const newAction: AnyAction = action;
                delete newAction.meta;
                store.dispatch(newAction);
            })
            .catch(error => {
                console.log(error);
                const newAction: AnyAction = action;
                delete newAction.meta;
                store.dispatch(newAction);
            });
    }
};

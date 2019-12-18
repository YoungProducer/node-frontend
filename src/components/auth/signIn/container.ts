import { Dispatch } from 'redux';
import {
    connect,
} from 'react-redux';

// Custom imports
import {
    createFetchSignInAction,
} from '../../../store/actionsCreators/signin';

// Types imports
import {
    FetchSignInCredentials,
    SigninActions,
    FetchSignInAction,
} from '../../../types/store/actionsCreators';

const mapDispatchToProps = (dispatch: any) => ({
    signIn: ({ email, password }: FetchSignInCredentials) => dispatch(createFetchSignInAction({ email, password })),
});

export default connect(
    null,
    mapDispatchToProps,
);

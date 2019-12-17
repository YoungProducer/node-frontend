import { Dispatch } from 'redux';
import {
    connect,
} from 'react-redux';

// Custom imports
import {
    createSignInAction,
} from '../../../store/actionsCreators/auth';

// Types imports
import {
    SignInCredentials,
    AuthActions,
} from '../../../types/store/actionsCreators';

const mapDispatchToProps = (dispatch: Dispatch<AuthActions>) => ({
    signIn: ({ email, password }: SignInCredentials) => dispatch(createSignInAction({ email, password })),
});

export default connect(
    null,
    mapDispatchToProps,
);

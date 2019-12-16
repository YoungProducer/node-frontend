
import { Dispatch } from 'redux';
import {
    connect,
    MapDispatchToProps,
} from 'react-redux';

// Custom imports
import {
    createSignUpAction,
    createSignInAction,
} from '../../../store/actionsCreators/auth';

// Types imports
import {
    ISignUpCredentials,
    ISignInCredentials,
    AuthActions,
} from '../../../types/store/actionsCreators';

const mapDispatchToProps = (dispatch: Dispatch<AuthActions>) => ({
    signUp: ({ email, password, userName }: ISignUpCredentials) => dispatch(createSignUpAction({ email, password, userName })),
    // signIn: ({ email, password }: ISignInCredentials) => dispatch(createSignInAction({ email, password })),
});

export default connect(
    null,
    mapDispatchToProps,
);

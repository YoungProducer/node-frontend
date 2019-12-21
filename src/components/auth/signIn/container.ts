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
} from '../../../types/store/actionsCreators';

import { getSignInLoading } from '../../../store/selectors/signin';
import { getEmailAfterSignUp } from '../../../store/selectors/signup';

const mapStateToProps = (state: any) => ({
    userEmail: getEmailAfterSignUp(state.signup),
    loading: getSignInLoading(state.signin),
});

const mapDispatchToProps = (dispatch: any) => ({
    signIn: ({ email, password }: FetchSignInCredentials) => dispatch(createFetchSignInAction({ email, password })),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
);

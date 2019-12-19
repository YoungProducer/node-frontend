
import { Dispatch, Store } from 'redux';
import {
    connect,
} from 'react-redux';

// Custom imports
import {
    createFetchSignUpAction,
} from '../../../store/actionsCreators/signup';

// Types imports
import {
    FetchSignUpCredentials,
} from '../../../types/store/actionsCreators/auth/signup';

import {
    getLoading,
} from '../../../store/selectors/signup';

const mapStateToProps = (state: any) => ({
    userEmail: state.signup.email,
    loading: getLoading(state),
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchSignUp: ({ email, password, userName }: FetchSignUpCredentials) => dispatch(createFetchSignUpAction({ email, password, userName })),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
);

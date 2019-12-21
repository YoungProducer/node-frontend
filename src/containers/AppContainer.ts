import { Dispatch, Store } from 'redux';
import { connect } from 'react-redux';

// // Custom imports

// // Actions
import { createFetchMeAction } from '../store/actionsCreators/me';
import { getLoggedIn } from '../store/selectors/signin';
import { getEmailAfterSignUp } from '../store/selectors/signup';
import { getMeLoading } from '../store/selectors/me';
import { getRefreshLoading } from '../store/selectors/refresh';

import App from '../App';

const mapStateToProps = (state: any) => ({
    loggedIn: getLoggedIn(state.signin),
    emailAfterSignUp: getEmailAfterSignUp(state.signup),
    authLoading: getMeLoading(state.me) || getRefreshLoading(state.refresh),
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchMe: () => dispatch(createFetchMeAction()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

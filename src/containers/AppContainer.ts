// import { Dispatch, Store } from 'redux';
// import { connect } from 'react-redux';

// // Custom imports

// // Actions
// import {
//     createMeAction,
//     createRefreshAction,
// } from '../store/actionsCreators/signin';
// import {
//     AuthActions,
//     MeCredentials,
//     RefreshCredentials,
// } from '../types/store/actionsCreators';

// // Selectors
// import { getLoggedIn } from '../store/selectors/auth';

// // Types
// import { AuthInitialState } from '../types/store/reducers';

// import App from '../App';

// const mapStateToProps = (state: any) => ({
//     loggedIn: getLoggedIn(state.auth),
// });

// const mapDispatchToProps = (dispatch: Dispatch<AuthActions>) => ({
//     me: ({}: MeCredentials) => dispatch(createMeAction({})),
//     refresh: ({}: RefreshCredentials) => dispatch(createRefreshAction({})),
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(App);

import { connect } from 'react-redux';

import { createFetchLogoutAction } from '../../store/actionsCreators/auth/logout';
import { getUserData } from '../../store/selectors/auth/signin';

const mapStateToProps = (state: any) => ({
    user: getUserData(state.signin),
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchLogout: () => dispatch(createFetchLogoutAction()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
);

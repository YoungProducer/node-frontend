import { connect } from 'react-redux';

import { createFetchLogoutAction } from '../../store/actionsCreators/logout';
import { getUserData } from '../../store/selectors/signin';

const mapStateToProps = (state: any) => ({
    user: getUserData(state.signup),
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchLogout: () => dispatch(createFetchLogoutAction()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
);

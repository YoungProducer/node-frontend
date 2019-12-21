import { connect } from 'react-redux';

import { createFetchLogoutAction } from '../../store/actionsCreators/logout';

const mapDispatchToProps = (dispatch: any) => ({
    fetchLogout: () => dispatch(createFetchLogoutAction()),
});

export default connect(
    null,
    mapDispatchToProps,
);

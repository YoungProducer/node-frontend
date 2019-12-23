import { connect } from 'react-redux';
import { createFetchUserAction } from '../../../store/actionsCreators/update/user';
import { FetchUserCredentials } from '../../../types/store/actionsCreators/update/user';

const mapDispatchToProps = (dispatch: any) => ({
    fetchUpdateUser: (credentials: FetchUserCredentials) => dispatch(createFetchUserAction(credentials)),
});

export default connect(
    null,
    mapDispatchToProps,
);

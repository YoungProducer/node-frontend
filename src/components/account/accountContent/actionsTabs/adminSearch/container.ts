import { connect } from 'react-redux';
import { getFoundUsers } from '../../../../../store/selectors/users/searchResult';
import { FetchFindUserByEmailCredentials } from '../../../../../types/store/actionsCreators/users/findByEmail';
import { createFetchFindUserByEmail } from '../../../../../store/actionsCreators/users/findByEmail';

const mapStateToProps = (state: any) => ({
    foundUsers: getFoundUsers(state.usersSearchResult),
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchFindUsersByEmail: (email: string) => dispatch(createFetchFindUserByEmail(email)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
);

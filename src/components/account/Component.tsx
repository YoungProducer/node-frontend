import React from 'react';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import UserInfo from './userInfo';
import { Role } from '../../types/store/actionsCreators/mainTypes';

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2)`,
        paddingLeft: 0,
        paddingRight: 0,
    },
    title: {
        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2)`,
        padding: `5px 0 5px 0`,
    },
    userInfoContainer: {
        // boxShadow: `0 -4px 8px 0 rgba(0, 0, 0, 0.2)`,
        height: 400,
        marginTop: 10,
        padding: '10px 30px 10px 30px',
    },
}));

export interface User {
    id: string;
    email: string;
    userName: string;
    role: Role;
}

interface IAccount {
    user: User;
    fetchLogout: Function;
}

const Account = ({ user, fetchLogout }: IAccount) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container
                fixed
                className={classes.container}
                component="div"
            >
                <Typography
                    className={classes.title}
                    color="primary"
                    align="center"
                    variant="h3"
                >
                    Account
                </Typography>
                <div className={classes.userInfoContainer}>
                    <UserInfo {...user} />
                </div>
                <button onClick={() => fetchLogout()}><NavLink to='/'>Log out</NavLink></button>
            </Container>
        </React.Fragment>
    );
};

export default Account;

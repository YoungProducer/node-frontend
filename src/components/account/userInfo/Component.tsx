import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typograhpy from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import { getRandomColor } from '../../../utils/getRandomColor';
import { User } from '../Component';

const useStyles = makeStyles((theme: Theme) => createStyles({
    avatar: {
        backgroundColor: getRandomColor(),
        width: 60,
        height: 60,
    },
    userInfoWrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    userData: {
        marginLeft: 15,
    },
    typography: {
        color: '#333',
        fontSize: '1rem',
    },
}));

const UserInfo = ({ email, userName, id, role }: User) => {
    const classes = useStyles();

    return (
        <Box className={classes.userInfoWrapper}>
            <Avatar className={classes.avatar} src="./img/avatar.jpg">
                {userName ? userName[0] : 'S'}
            </Avatar>
            <Box className={classes.userData}>
                <Typograhpy variant="h5" className={classes.typography}>
                    UserName: {userName}
                </Typograhpy>
                <Typograhpy variant="h5" className={classes.typography}>
                    Email: {email}
                </Typograhpy>
                <Typograhpy variant="h5" className={classes.typography}>
                    User ID: {id}
                </Typograhpy>
            </Box>
        </Box>
    );
};

export default UserInfo;

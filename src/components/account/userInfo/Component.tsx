import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import { User } from '../Component';

const UserInfo = ({ email, userName, id, role }: User) => {

    const getRandomColor = (): string => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <>
            <Avatar
                style={{
                    backgroundColor: getRandomColor(),
                }}
            >
                {userName ? userName[0] : 'S'}
            </Avatar>
        </>
    );
};

export default UserInfo;

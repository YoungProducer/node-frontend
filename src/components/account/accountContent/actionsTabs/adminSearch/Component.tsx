import React, { useState, useEffect, useCallback, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import * as _ from 'lodash';

import { SetSearchUserResultCredentials } from '../../../../../types/store/actionsCreators/users/searchResult';
import { FetchFindUserByEmailCredentials } from '../../../../../types/store/actionsCreators/users/findByEmail';
import { Box } from '@material-ui/core';

interface AdminSearchProps {
    foundUsers: SetSearchUserResultCredentials[];
    fetchFindUsersByEmail(credentials: string): any;
}

const AdminSearch = ({ foundUsers, fetchFindUsersByEmail }: AdminSearchProps) => {
    const [textFieldsValue, setTextFieldValue] = useState<string>('');

    const debounced = useRef(_.debounce((value: string) => fetchFindUsersByEmail(value), 250));

    useEffect(() => debounced.current(textFieldsValue), [textFieldsValue]);

    return (
        <Box>
            <TextField
                color="primary"
                value={textFieldsValue}
                onChange={event => {
                    setTextFieldValue(event.target.value);
                }}
            />
            <List>
                {foundUsers.map((user: SetSearchUserResultCredentials) => (
                    <ListItem key={user.id} button>
                        {user.email}
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default AdminSearch;

import React from 'react';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';

interface IAccount {
    fetchLogout: Function;
}

const Account = ({ fetchLogout }: IAccount) => {
    return (
        <>
            <h1>Account</h1>
            <button onClick={() => fetchLogout()}><NavLink to='/'>Log out</NavLink></button>
        </>
    );
};

export default Account;

import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import SignUpModal from '../auth/signUp';
import SignInModal from '../auth/signIn';

interface IRoutes {
    loggedIn: boolean;
}

const Routes = ({ loggedIn }: IRoutes) => {
    useEffect(() => {
        console.log(loggedIn);
    },        [loggedIn]);

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <h1>Hello</h1>
                    <NavLink to='/auth/signin'>signin</NavLink>
                    <NavLink to='/auth/signup'>signup</NavLink>
                </Route>
                <Route path='/auth/signup' component={SignUpModal} />
                <Route path='/auth/signin' component={SignInModal} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

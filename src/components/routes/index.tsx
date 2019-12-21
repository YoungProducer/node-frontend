import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom';

import SignUpModal from '../auth/signUp';
import SignInModal from '../auth/signIn';
import Account from '../account';

interface IRoutes {
    loggedIn: boolean;
    emailAfterSignUp: string;
}

const Routes = ({ loggedIn, emailAfterSignUp }: IRoutes) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    { emailAfterSignUp !== null
                        ? <Redirect to='/auth/signin' />
                        : <Redirect to='/auth/signup' />}
                </Route>
                <Route path='/auth/signup' component={SignUpModal}>
                    { loggedIn
                        ? <Redirect to='/user/account' />
                            : emailAfterSignUp !== null
                            ? <Redirect to='/auth/signin' />
                        : null}
                </Route>
                <Route path='/auth/signin' component={SignInModal} >
                    { loggedIn && <Redirect to='/user/account' />}
                </Route>
                <Route path='/user/account' component={Account}>
                    { !loggedIn && <Redirect to='/' />}
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

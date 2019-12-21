import React, { useState, useEffect } from 'react';

import Routes from './components/routes';

interface IApp {
    loggedIn: boolean;
    emailAfterSignUp: string;
    fetchMe: Function;
}

const App = ({
    loggedIn,
    emailAfterSignUp,
    fetchMe,
}: IApp) => {
    useEffect(() => {
        fetchMe({});
    },        [fetchMe]);

    return(
        <Routes
            loggedIn={loggedIn}
            emailAfterSignUp={emailAfterSignUp}
        />
    );
};

export default App;

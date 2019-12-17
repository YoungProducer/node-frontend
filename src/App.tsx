import React, { useState, useEffect } from 'react';

import Routes from './components/routes';

interface IApp {
    loggedIn: boolean;
    me: Function;
    refresh: Function;
}

const App = ({
    loggedIn,
    me,
    refresh,
}: IApp) => {
    useEffect(() => {
        me({});
    },        [me]);
    // const [isAuthenticated, setAuthenticated] = useState(false);
    // const { data, loading, error } = useQuery(ME);

    // if (data) {
    //     console.log(data);
    // }

    // if (error) {
    //     console.log(error);
    // }
    // axios.get('http://localhost:4000/auth/me', {
    //     withCredentials: true,
    // }).then(response => {
    //     console.log(response);
    // }).catch(err => {
    //     console.log(err);
    // });

    return(
        <Routes loggedIn={loggedIn} />
    );
};

export default App;

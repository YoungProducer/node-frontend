import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Mutation, useQuery } from 'react-apollo';

import { ME } from './queries';
import Routes from './components/routes';

const App = () => {
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
        <Routes />
    );
};

export default App;

import React, { useState, useEffect } from 'react';
import { Mutation, useQuery } from 'react-apollo';

import { ME } from './queries';
import Routes from './components/routes';

const App = () => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const { data, loading, error } = useQuery(ME);

    if (data) {
        console.log(data);
    }

    if (error) {
        console.log(error);
    }

    return(
        <Routes />
    );
};

export default App;

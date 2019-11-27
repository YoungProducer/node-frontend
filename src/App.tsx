import React, { useState } from 'react';
import { Mutation, useMutation } from 'react-apollo';
import gql from 'graphql-tag';

import SignUp from './components/auth/signUp';

const App = () => {
    return (
        <SignUp />
    );
};

export default App;

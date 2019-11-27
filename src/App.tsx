import React, { useState } from 'react';
import { Mutation, useMutation } from 'react-apollo';
import gql from 'graphql-tag';

const App = () => {
    const signUpRequest = gql`mutation SignUp($email: String!, $password: String!, $userName: String!) {
        signup(email: $email, password: $password, userName: $userName) {
            email,
            userName
        }
    }`;

    const [signUp, { loading, error, data }] = useMutation(signUpRequest);
    const [email, setEmail] = useState('email@gmail.com');
    const [password, setPassword] = useState('rembo123');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    if (data) console.log(data);

    return (
        <div>
            <input value={email} onChange={event => setEmail(event.target.value)} />
            <input value={password} onChange={event => setPassword(event.target.value)} />
            <button onClick={() => signUp({variables: {
                email,
                password,
                userName: email,
            }})}>Sign Up</button>
        </div>
    );
}

export default App;

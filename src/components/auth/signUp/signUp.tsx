import React, { useState, useEffect } from 'react';
import { gql, ApolloError } from 'apollo-boost';
import { useApolloClient, useMutation } from 'react-apollo';
import { ISignUpCredentials } from '../../../types/store/actionsCreators';

interface Test {
    isLoggedIn: boolean;
    setUserData: React.Dispatch<React.SetStateAction<ISignUpCredentials>>;
}

const useSignUp = ({ email, password, userName }: ISignUpCredentials): Test => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userData, setUserData] = useState<ISignUpCredentials>({
        email,
        password,
        userName,
    });

    const client = useApolloClient();
    const mutation = gql`mutation SignUp($email: String!, $password: String!, $userName: String) {
        signup(email: $email, password: $password, userName: $userName) {
            id,
            email,
            userName,
        }
    }`;

    const [signUp, { loading, error, data }] = useMutation(mutation, {
        variables: userData,
    });

    useEffect(() => {
        const handleResponseStatus = (loading: boolean, error: ApolloError, data: any) => {
            if (!error) {
                client.writeData({ data: { isLoggedIn, userData: data } });
                setIsLoggedIn(true);
            }
            console.log(client);
        };
        console.log(1);
        signUp();
        return () => {
            handleResponseStatus(loading, error, data);
        };
    },        [userData.email, userData.password, userData.userName, setIsLoggedIn]);

    return { isLoggedIn, setUserData };
};

const SignUp = () => {
    const [email, setEmail] = useState('emaila@gmail.com');
    const [password, setPassword] = useState('remboa123');

    const { isLoggedIn, setUserData } = useSignUp({ email: '', password: '', userName: 'email' });
    return (
        <div>
            <input value={email} onChange={event => setEmail(event.target.value)} />
            <input value={password} onChange={event => setPassword(event.target.value)} />
            <button onClick={() => {
                setUserData({ email, password, userName: email });
            }}
            >
                Sign Up
            </button>
        </div>
    );
};

export default SignUp;

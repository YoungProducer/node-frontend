import React, { useState } from 'react';
import { ISignUpCredentials } from '../../../types/store/actionsCreators';

interface ISignUp {
    signUp({ email, password, userName }: ISignUpCredentials): any;
}

const SignUp = ({
    signUp,
}: ISignUp) => {
    const [email, setEmail] = useState('email@gmail.com');
    const [password, setPassword] = useState('rembo123');

    return (
        <div>
            <input value={email} onChange={event => setEmail(event.target.value)} />
            <input value={password} onChange={event => setPassword(event.target.value)} />
            <button onClick={() => signUp({
                email,
                password,
                userName: email,
            })}
            >
                Sign Up
            </button>
        </div>
    );
};

export default SignUp;

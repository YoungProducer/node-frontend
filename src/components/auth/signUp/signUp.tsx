import React, { useState } from 'react';
import { useMutation } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import isemail from 'isemail';

import { SIGN_UP } from '../../../queries';

const useStyles = makeStyles((theme: Theme) => createStyles({
    formWrapper: {
        background: '#fff',
        position: 'fixed',
        padding: 15,
        left: '50%',
        top: '50%',
        transform: `translate(-50%, -50%)`,
        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2)`,
        textAlign: 'center',
    },
    textField: {
        marginBottom: 30,
        display: 'block',
        width: 240,
        height: 40,
    },
    title: {
        color: theme.palette.primary.main,
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
    },
}));

const SignUpModal = () => {
    const clasess = useStyles();

    const [signUp, { data, loading, error }] = useMutation(SIGN_UP);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatedPassword, setRepeatedPassword] = useState<string>('');

    const [invalidFields, setInvalidFields] = useState<boolean>(false);
    const [emailInvalid, setEmailInvalid] = useState<boolean>(false);
    const [passwordInvalid, setPasswordInvalid] = useState<boolean>(false);
    const [repeatedPasswordInvalid, setRepeatedPasswordInvalid] = useState<boolean>(false);

    const [emailInvalidMessage, setEmailInvalidMessage] = useState<string>('');
    const [passwordInvalidMessage, setPasswordInvalidMessage] = useState<string>('Password must be minimum 8 chars.');
    const [repeatedPasswordInvalidMessage, setRepeatedPasswordInvalidMessage] = useState<string>('Enter the same password');

    if (data) {
        console.log(data);
    }
    if (loading) {
        console.log('Loading');
    }
    if (error) {
        console.log(error.graphQLErrors[0]);
    }

    const send = () => {
        if (!isemail.validate(email)) {
            setEmailInvalid(true);
            setEmailInvalidMessage('Invalid email pattern!');
            setInvalidFields(true);
        }
        if (password.length < 8) {
            setPasswordInvalid(true);
            setPasswordInvalidMessage('To short password');
            setInvalidFields(true);
        }
        if (password !== repeatedPassword) {
            setRepeatedPasswordInvalid(true);
            setRepeatedPasswordInvalidMessage('Passwords are different');
            setInvalidFields(true);
        }

        if (!invalidFields) {
            signUp({
                variables: {
                    email,
                    password,
                },
            });
        }
    };

    return (
        <div className={clasess.formWrapper}>
            <Typography
                color="secondary"
                variant="h4"
                component="h1"
                className={clasess.title}
            >
                Sign Up
            </Typography>
            <TextField
                value={email}
                onChange={event => {
                    setEmail(event.target.value);
                    setEmailInvalid(false);
                    setEmailInvalidMessage('');
                    setInvalidFields(false);
                }}
                type="email"
                label="Email"
                color="primary"
                variant="standard"
                error={emailInvalid}
                helperText={emailInvalidMessage}
                className={clasess.textField}
            />
            <TextField
                value={password}
                onChange={event => {
                    setPassword(event.target.value);
                    setPasswordInvalid(false);
                    setPasswordInvalidMessage('Password must be minimum 8 chars.');
                    setInvalidFields(false);
                }}
                type="password"
                label="Password"
                color="primary"
                variant="standard"
                error={passwordInvalid}
                helperText={passwordInvalidMessage}
                className={clasess.textField}
            />
            <TextField
                value={repeatedPassword}
                onChange={event => {
                    setRepeatedPassword(event.target.value);
                    setRepeatedPasswordInvalid(false);
                    setRepeatedPasswordInvalidMessage('Enter the same password');
                    setInvalidFields(false);
                }}
                type="password"
                label="Repeat password"
                color="primary"
                variant="standard"
                error={repeatedPasswordInvalid}
                helperText={repeatedPasswordInvalidMessage}
                className={clasess.textField}
            />
            <Button
                disabled={loading}
                variant={loading ? 'outlined' : 'contained'}
                className={clasess.button}
                color="primary"
                onClick={send}
            >
                Sign Up
                {loading && <CircularProgress color="primary" size="30px"/>}
            </Button>
        </div>
    );
};

export default SignUpModal;

import React, { useState } from 'react';
import axios from 'axios';
import { useMutation } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import isemail from 'isemail';

import { SIGN_IN } from '../../../queries';

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
        marginBottom: 40,
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
    circularProgress: {
        marginLeft: 10,
    },
}));

const SignInModal = ({ signIn }: any) => {
    const clasess = useStyles();

    // const [signUp, { data, loading, error }] = useMutation(SIGN_IN, {
    //     onError: (err) => {
    //         if (err.graphQLErrors[0].message === 'Invalid credentials') {
    //             const { invalidCredentials, invalidCredentialsMessages } = err.graphQLErrors[0].extensions;

    //             setEmailInvalid(invalidCredentials.email);
    //             setEmailInvalidMessage(invalidCredentialsMessages.email);

    //             setPasswordInvalid(invalidCredentials.password);
    //             setPasswordInvalidMessage(invalidCredentialsMessages.password || passwordInvalidMessage);
    //         }
    //     },
    //     onCompleted: (res) => {
    //         console.log(res);
    //     },
    // });

    const [email, setEmail] = useState<string>('sasha@gmail.com');
    const [password, setPassword] = useState<string>('Sasha080701');

    const [invalidFields, setInvalidFields] = useState<boolean>(false);
    const [emailInvalid, setEmailInvalid] = useState<boolean>(false);
    const [passwordInvalid, setPasswordInvalid] = useState<boolean>(false);

    const [emailInvalidMessage, setEmailInvalidMessage] = useState<string>('');
    const [passwordInvalidMessage, setPasswordInvalidMessage] = useState<string>('Password must be minimum 8 chars.');

    console.log(signIn);
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

        if (!invalidFields) {
            // signUp({
            //     variables: {
            //         email,
            //         password,
            //     },
            // });
            signIn({email, password});
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
                Sign In
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
            <Button
                // disabled={loading}
                // variant={loading ? 'outlined' : 'contained'}
                className={clasess.button}
                color="primary"
                onClick={send}
            >
                Sign In
                {/* {loading && <CircularProgress
                    className={clasess.circularProgress}
                    color="primary"
                    size="30px"
                />} */}
            </Button>
        </div>
    );
};

export default SignInModal;

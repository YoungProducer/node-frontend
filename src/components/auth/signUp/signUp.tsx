import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import isemail from 'isemail';

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
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatedPassword, setRepeatedPassword] = useState<string>('');

    const [emailInvalid, setEmailInvalid] = useState<boolean>(false);
    const [passwordInvalid, setPasswordInvalid] = useState<boolean>(false);
    const [repeatedPasswordInvalid, setRepeatedPasswordInvalid] = useState<boolean>(false);

    const [emailInvalidMessage, setEmailInvalidMessage] = useState<string>('');
    const [passwordInvalidMessage, setPasswordInvalidMessage] = useState<string>('Password must be minimum 8 chars.');
    const [repeatedPasswordInvalidMessage, setRepeatedPasswordInvalidMessage] = useState<string>('Enter the same password');

    const send = () => {
        if (!isemail.validate(email)) {
            setEmailInvalid(true);
            setEmailInvalidMessage('Invalid email pattern!');
        }
        if (password.length < 8) {
            setPasswordInvalid(true);
            setPasswordInvalidMessage('To short password');
        }
        if (password !== repeatedPassword) {
            setRepeatedPasswordInvalid(true);
            setRepeatedPasswordInvalidMessage('Passwords are different');
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
                }}
                label="Email"
                color="secondary"
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
                }}
                label="Password"
                color="secondary"
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
                }}
                label="Repeat password"
                color="secondary"
                variant="standard"
                error={repeatedPasswordInvalid}
                helperText={repeatedPasswordInvalidMessage}
                className={clasess.textField}
            />
            <Button
                className={clasess.button}
                variant="contained"
                color="secondary"
                onClick={send}
            >
                Sign Up
            </Button>
        </div>
    );
};

export default SignUpModal;

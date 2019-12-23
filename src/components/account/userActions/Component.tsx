import React, { useState, useEffect } from 'react';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core';
import { User } from '../Component';
import { FetchUserCredentials } from '../../../types/store/actionsCreators/update/user';

const useStyles = makeStyles((theme: Theme) => createStyles({
    textField: {
        display: 'block',
    },
    button: {
        width: 170,
    },
    hiddenButton: {
        width: 170,
        marginTop: 15,
        marginLeft: 15,
        '&:last-child': {
            marginBottom: 15,
        },
    },
    actions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
}));

const StyledMenu = withStyles({
    paper: {
        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2)`,
    },
})((props: MenuProps) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            color: '#fff',
        },
    },
}))(MenuItem);

type DialogAction = 'email' | 'userName' | 'password';

interface IUserActions {
    user: User;
    fetchUpdateUser(credentials: FetchUserCredentials): Function;
}

const UserActions = ({ user, fetchUpdateUser }: IUserActions) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const [hasChanges, setHasChanges] = useState<boolean>(false);
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [dialogAction, setDialogAction] = useState<DialogAction>('email');

    const [newEmail, setNewEmail] = useState<string>(null);
    const [newUserName, setNewUserName] = useState<string>(null);
    const [newPassword, setNewPassword] = useState<string>(null);
    const [currentPassword, setCurrentPassword] = useState<string>(null);

    useEffect(() => {
        if (newEmail !== null
            || newUserName !== null
            || newPassword !== null
            || currentPassword !== null
        ) {
            setHasChanges(true);
        } else setHasChanges(false);
    },        [newEmail, newUserName, newPassword, setHasChanges]);

    const clearFields = (): void => {
        setNewEmail(null);
        setNewUserName(null);
        setNewPassword(null);
        setCurrentPassword(null);
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);

    return (
        <Box>
            <div className={classes.actions}>
                <Button
                    aria-controls="edit-profile-menu"
                    aria-haspopup="true"
                    color="secondary"
                    variant="outlined"
                    onClick={handleClick}
                    className={classes.button}
                >
                    Edit Profile
                </Button>
                { hasChanges &&
                    <>
                        <Button
                            aria-controls="edit-profile-menu"
                            aria-haspopup="true"
                            color="secondary"
                            variant="outlined"
                            onClick={() => fetchUpdateUser({
                                email: newEmail,
                                password: newPassword,
                                userName: newUserName,
                                previousPassword: currentPassword,
                            })}
                            className={classes.hiddenButton}
                        >
                            Save changes
                        </Button>
                        <Button
                            aria-controls="edit-profile-menu"
                            aria-haspopup="true"
                            color="secondary"
                            variant="outlined"
                            onClick={() => {
                                clearFields();
                            }}
                            className={classes.hiddenButton}
                        >
                            Cancel changes
                        </Button>
                    </>
                }
            </div>
            <StyledMenu
                id="edit-profile-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem
                    onClick={() => {
                        setDialogAction('email');
                        setOpenDialog(true);
                        handleClose();
                    }}
                >
                    Change email
                </StyledMenuItem>
                <StyledMenuItem
                    onClick={() => {
                        setDialogAction('userName');
                        setOpenDialog(true);
                        handleClose();
                    }}
                >
                    Change userName
                </StyledMenuItem>
                <StyledMenuItem
                    onClick={() => {
                        setDialogAction('password');
                        setOpenDialog(true);
                        handleClose();
                    }}
                >
                    Change password
                </StyledMenuItem>
            </StyledMenu>
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)} aria-labelledby="change-user-data-title">
                <DialogTitle
                    id="change-user-data-title"
                >
                    {`Change ${dialogAction}`}
                </DialogTitle>
                <DialogContent>
                    {dialogAction === 'password' && <TextField
                        className={classes.textField}
                        color="secondary"
                        autoFocus
                        id="current-password"
                        label="Current password"
                        type="password"
                        value={currentPassword}
                        onChange={event => setCurrentPassword(event.target.value)}
                    />}
                    <TextField
                        className={classes.textField}
                        color="secondary"
                        autoFocus
                        id={dialogAction}
                        label={dialogAction[0].toUpperCase() + dialogAction.slice(1, dialogAction.length)}
                        type={dialogAction === 'email'
                                ? 'email'
                                    : dialogAction === 'password'
                                    ? 'password'
                                : 'text'}
                        onChange={event => {
                            const value = event.target.value;

                            dialogAction === 'email'
                                ? setNewEmail(value)
                                    : dialogAction === 'userName'
                                    ? setNewUserName(value)
                                : setNewPassword(value);
                        }}
                        value={dialogAction === 'email'
                                ? newEmail
                                    : dialogAction === 'userName'
                                    ? newUserName
                                : newPassword
                        }
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        color="secondary"
                        onClick={() => {
                            setOpenDialog(false);
                            clearFields();
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        color="secondary"
                        onClick={() => {
                            setOpenDialog(false);
                        }}
                    >
                        Save and continue
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default UserActions;

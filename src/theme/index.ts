import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#9162e4',
            main: '#5e35b1',
            dark: '#280680',
            contrastText: '#fff',
        },
        secondary: {
            light: '#88ffff',
            main: '#4dd0e1',
            dark: '#009faf',
            contrastText: '#fff',
        },
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: '#5e35b1',
            },
        },
        MuiInputBase: {
            root: {
                width: 240,
                color: '#333',
            },
        },
        MuiButton: {
            root: {
                width: 200,
            },
        },
    },
});

export default theme;

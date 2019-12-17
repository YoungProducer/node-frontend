import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import apiMiddleware from './store/middleware/apiMiddleware';
import loggerMiddleware from './store/middleware/loggerMiddleware';
import rootReducer from './store/reducers';
import theme from './theme';
import App from "./containers/AppContainer";

import "./index.css";

const rootElement = document.getElementById("root");

const store = createStore(rootReducer, applyMiddleware(apiMiddleware, loggerMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    rootElement,
);

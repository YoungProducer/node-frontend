import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createHttpLink } from 'apollo-link-http';
import ApolloClient, { InMemoryCache, ApolloLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from '@material-ui/core/styles';

import apiMiddleware from './store/middleware/apiMiddleware';
import loggerMiddleware from './store/middleware/loggerMiddleware';
import rootReducer from './store/reducers';
import theme from './theme';
import App from "./App";

import "./index.css";

const rootElement = document.getElementById("root");

const link = createHttpLink({
    uri: 'http://localhost:4000',
    credentials: 'same-origin',
});

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    credentials: 'include',
    cache: new InMemoryCache(),
    fetchOptions: {
        credentials: 'include',
    },
});

const store = createStore(rootReducer, applyMiddleware(apiMiddleware, loggerMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    rootElement,
);

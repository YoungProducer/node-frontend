import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {
    createStore,
    applyMiddleware,
    Store,
} from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './store/reducers';
import { loggerMiddleware } from './store/middleware/loggerMiddleware';
import apiMiddleware from './store/middleware/apiMiddleware';
import App from "./App";

import "./index.css";

const rootElement = document.getElementById("root");
const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
});
const store = createStore(
    rootReducer,
    applyMiddleware(
        loggerMiddleware,
        apiMiddleware,
    ),
);

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>,
    rootElement,
);

import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from "./App";

import "./index.css"


const rootElement = document.getElementById("root");
const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);

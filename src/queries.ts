import { gql } from 'apollo-boost';

export const SIGN_UP = gql`mutation SignUp($email: String!, $password: String!, $userName: String) {
    signup(email: $email, password: $password, userName: $userName) {
        id,
    }
}`;

export const SIGN_IN = gql`mutation SignIn($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
        id,
        email,
        userName,
    }
}`;

export const ME = gql`query Me {
    me {
        id,
        email,
        userName
    }
}`;

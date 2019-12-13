import { gql } from 'apollo-boost';

export const SIGN_UP = gql`mutation SignUp($email: String!, $password: String!, $userName: String) {
    signup(email: $email, password: $password, userName: $userName) {
        id,
    }
}`;

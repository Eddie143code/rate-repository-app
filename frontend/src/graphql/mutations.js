import { gql } from "@apollo/client";

export const GET_TOKEN = gql`
  mutation GetToken($user: String!, $pass: String!) {
    authenticate(credentials: { username: $user, password: $pass }) {
      accessToken
    }
  }
`;

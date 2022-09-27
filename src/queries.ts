import { gql } from "@apollo/client";

gql`
  query getAllUsers {
    users {
      username
      first_name
      last_name
    }
  }
`;

gql`
  query getUserMessages($username: ID!) {
    user(username: $username) {
      messages {
        body
      }
    }
  }
`;

gql`
  mutation createUser($username: ID!, $first_name: String!, $last_name: String!) {
    createUser(username: $username, first_name: $first_name, last_name: $last_name) {
      username
      first_name
      last_name
    }
  }`;



gql`  mutation createMessage($username: ID!, $body:String!) {

  createMessage(username: $username, body: $body) {
    body
    user {
      username
    }
  }
}`

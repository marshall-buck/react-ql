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
        query  getUserMessages($username: ID!) {
          user(username: $username) {
            messages {
              body
          }
        }
      }
`



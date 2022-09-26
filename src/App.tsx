import React from 'react';
import { UserApiInterface } from './types';
import './App.css';
import  User  from './User'

import { useQuery, gql } from '@apollo/client';


const ALL_USERS = gql`
        query {
          users {
             username
            first_name
            last_name
            messages {
              body
            }

          }
        }
      `
// const USER_MESSAGES = gql`
//         query {user(username: { [username: string]: any }){messages {body}}}
//       `

/** Main App, Loads all users
 *
 * App -> User
 */
function App() {
  const { loading, error, data } = useQuery(ALL_USERS);



    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      { data.users.map((user: UserApiInterface) => <User username={user.username}
       firstName={user.first_name}/>)}
    </div>
  );
}

export default App;

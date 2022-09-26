import React from 'react';
import { UserInterface } from './types';
import './App.css';
import User from './User';
import { Route, Routes } from "react-router-dom"
import MessageList from './MessageList';

import { useQuery, gql } from '@apollo/client';


const ALL_USERS = gql`
        query {
          users {
             username
            first_name
            last_name
          }
        }
      `;



/** Main App, Loads all users
 *
 * App ->
 *  User
 *  Routes ->Messages, UserForm, MessageForm
 */
function App() {
  const { loading, error, data } = useQuery<UserInterface[]>(ALL_USERS);

  console.log(data)
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<User users = {data.users} />} />
        <Route path="/:username/messages" element= {<MessageList />} />
      </Routes>
    </div>
  );
}

export default App;
// {/* <Route path="/addUser" element= {<UserForm />} />
// <Route path="/:username/addMessage" element= {<MessageForm />} /> */}

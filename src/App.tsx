import "./App.css";
import UserList from "./User";
import { Route, Routes, Link } from "react-router-dom";
import MessageList from "./MessageList";

import { useGetAllUsersQuery } from "./graphql/generated";

/** Main App, Loads all users
 *
 * App ->
 *  User
 *  Routes ->Messages, UserForm, MessageForm
 */
function App() {
  const { loading, error, data } = useGetAllUsersQuery();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <nav>
        <Link to={"/add-user"}>Add User</Link>
      </nav>

      <Routes>
        <Route path="/" element={<UserList users={data?.users} />} />
        <Route path="/:username/messages" element={<MessageList />} />
      </Routes>
    </div>
  );
}

export default App;

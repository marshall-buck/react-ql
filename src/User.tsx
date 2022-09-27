import { Link } from "react-router-dom";
import { GetAllUsersQuery } from "./graphql/generated";

function UserList({ users }: GetAllUsersQuery) {
  if (users)
    return (
      <div>
        {users.map((user) => (
          <div key={user.username}>
            <p>{user.username}</p>
            <p>
              {user.first_name} {user.last_name}
            </p>
            <Link to={`/${user.username}/messages`}> Get Messages </Link>
          </div>
        ))}
      </div>
    );
  else return <div> "no users" ;</div>;
}

export default UserList;

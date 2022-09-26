
import { Link } from 'react-router-dom';
import { UserApiInterface, UserPropsInterface } from './types';


function User({ users }: UserApiInterface[] | undefined) {


    return (
        <div>
            {users.map((user: UserApiInterface) =>
                <>
                    <p>{user.username}</p>
                    <p>{user.first_name} {user.last_name}</p>
                    <Link to={`/${user.username}/messages`}> Get Messages </Link>
                </>
            )
            }

        </div>);
}


export default User;


import {UserPropsInterface} from './types'


function User({username, firstName, lastName} :UserPropsInterface) {



    return (
        <div>

            <p>{username}</p>
            <p>{firstName} {lastName}</p>


        </div>    )
}


export default User
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { MessageApiInterface } from './types';


function MessageList() {
    const { username } = useParams();

    const USER_MESSAGES = gql`
            query{user(username:${username}){messages{body}}}
          `;
    const { loading, error, data } = useQuery(USER_MESSAGES);


    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error :(</p>;


    return (
        <div className="App">
            {data.user.messages.map((message: MessageApiInterface) =>
                <p>message.body</p>
            )}
        </div>
    );


}

export default MessageList;
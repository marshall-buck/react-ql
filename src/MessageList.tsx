import {useGetUserMessagesQuery} from "./graphql/generated"
import { useParams } from 'react-router-dom';

function MessageList() {
    const { username } = useParams();


    const { loading, error, data } = useGetUserMessagesQuery({ variables: { username: "00" } });


    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error :(</p>;


    return (
        <div >
           <h2>{username} Messages</h2>
           {data && data?.user?.messages?.map(message => <p>{message.body}</p>  )}

        </div>
    );


}

export default MessageList;
import {useParams} from 'react-router-dom'
import {useCreateMessageMutation} from './graphql/generated'

function AddMessage() {
    const {username} = useParams()
    const [createMessageMutation, { loading, error, data } ] = useCreateMessageMutation(
                                                                {variables: { username: "" , body: ""} })


    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error :( </p>;

    return (
        <div> <label htmlFor="body"></label>
        <textarea id="body" name='body'/></div>

    )


}

export default AddMessage
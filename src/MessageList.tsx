import {
  useGetUserMessagesQuery,
  useMessageAddedSubscription,
  useCreateMessageMutation,
} from "./graphql/generated";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function MessageList() {
  const { username } = useParams();
  const [formData, setFormData] = useState({
    body: "",
  });

  const { loading, error, data } = useGetUserMessagesQuery({
    variables: { username: username as string },
  });

  const [
    createMessageMutation,
    { loading: messageLoading, error: messageError, data: messageData },
  ] = useCreateMessageMutation();

  const { data: subscription } = useMessageAddedSubscription({
    variables: {
      username: username as string,
    },
  });

  /** Update local state w/curr state of input elem */
  function handleChange(evt: { target: { name: string; value: string } }) {
    const { name, value } = evt.target;
    setFormData((fData: any) => ({
      ...fData,
      [name]: value,
    }));
  }

  async function addMessage(evt: React.SyntheticEvent<HTMLFormElement>) {
    evt.preventDefault();
    const data = await createMessageMutation({
      variables: { username: username as string, body: formData.body },
    });

    console.log(data);
    setFormData({
      body: "",
    });
  }

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>{username} Messages</h2>
      <form onSubmit={addMessage}>
        <label htmlFor="body">Add Message</label>
        <textarea
          onChange={handleChange}
          id="body"
          name="body"
          value={formData.body}
        ></textarea>
        <button>Add Message</button>
      </form>
      {data &&
        data.user?.messages?.map((message) => (
          <p key={uuidv4()}>{message.body}</p>
        ))}
    </div>
  );
}
export default MessageList;

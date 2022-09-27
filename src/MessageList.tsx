import {
  useGetUserMessagesQuery,
  useMessageAddedSubscription,
  useCreateMessageMutation,
  GetUserMessagesQuery,
  Message,
} from "./graphql/generated";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function MessageList() {
  const { username } = useParams();
  const [formData, setFormData] = useState({
    body: "",
  });

  const [messages, setMessages] = useState<Message[] | null>(null);

  const { loading, error, data } = useGetUserMessagesQuery({
    variables: { username: username as string },
    onCompleted: (data) => {
      const results = data?.user?.messages as Message[];
      console.log(data);

      setMessages(results);
    },
  });

  const [
    createMessageMutation,
    { loading: messageLoading, error: messageError, data: messageData },
  ] = useCreateMessageMutation();

  // const { data: subscription } = useMessageAddedSubscription({
  //   variables: {
  //     username: username as string,
  //   },
  // });

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
    await createMessageMutation({
      variables: { username: username as string, body: formData.body },
      onCompleted: (data) => {
        const result = data.createMessage as Message;
        console.log(data);
        if (messages) {
          setMessages(() => [...messages, result]);
        }
      },
    });

    setFormData({
      body: "",
    });
  }

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>{username} Messages</h2>
      {JSON.stringify(messages)}
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
      {messages &&
        messages.map((message) => <p key={uuidv4()}>{message.body}</p>)}
    </div>
  );
}
export default MessageList;

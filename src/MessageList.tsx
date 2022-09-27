import { useGetUserMessagesQuery } from "./graphql/generated";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { useCreateMessageMutation } from "./graphql/generated";

function MessageList() {
  const { username } = useParams();
  const [formData, setFormData] = useState({ username: "", body: "" });

  const { loading, error, data } = useGetUserMessagesQuery({
    variables: { username: "00" },
  });

  const [createMessageMutation, { loading, error, data }] =
    useCreateMessageMutation({ variables: { username: "", body: "" } });

  /** Update local state w/curr state of input elem */
  function handleChange(evt: { target: { name: string; value: string } }) {
    {
      const { name, value } = evt.target;
      setFormData((fData: any) => ({
        ...fData,
        [name]: value,
      }));
    }

    function addMessage();

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error :(</p>;

    return (
      <div>
        <h2>{username} Messages</h2>
        <div>
          <label htmlFor="body">Add Message</label>
          <textarea
            onChange={handleChange}
            id="body"
            name="body"
            value={formData.body}
          ></textarea>
          <button onClick={addMessage}>Add Message</button>
        </div>
        {data && data?.user?.messages?.map((message) => <p>{message.body}</p>)}
      </div>
    );
  }
}
export default MessageList;

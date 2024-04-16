// src/components/CreatePostForm.jsx

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const CreatePostForm = ({ addPost, postToEdit, toggleModal }) => {
  const { text: initialText } = postToEdit?.text || "";
  const [text, setText] = useState(initialText || "");

  // necessary to update when editingText changes
  useEffect(() => {
    setText(postToEdit?.text || "");
  }, [postToEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // edit a post or create a new one
    const data = postToEdit
      ? { ...postToEdit, text }
      : {
          id: uuidv4(),
          author: "You",
          text: text,
          like: false,
        };
    addPost(data);
    setText("");
    if (postToEdit) toggleModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        name="text"
        id="text"
        cols="30"
        rows="10"
        placeholder="Input your post text here*"
      ></textarea>
      <input className="input__button" type="submit" value="Submit Post" />
    </form>
  );
};

export default CreatePostForm;

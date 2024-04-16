import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const CreatePostForm = ({ addPost, editingText }) => {
  const [text, setText] = useState(editingText || "");

  // necessary to update when editingText changes
  useEffect(() => {
    setText(editingText || "");
  }, [editingText]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      id: uuidv4(),
      author: "You",
      text: text,
      like: false,
    };

    addPost(data);
    setText("");
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

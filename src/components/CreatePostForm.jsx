import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

const CreatePostForm = ({addPost}) => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
        id: uuidv4(),
        author: "You",
        text: formRef.current.value
    }

    addPost(data);
    formRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        ref={formRef}
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

import { useRef } from "react";

const CreatePostForm = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formRef.current.value);
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

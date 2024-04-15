const CreatePostForm = () => {
  return (
    <form>
      <textarea
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

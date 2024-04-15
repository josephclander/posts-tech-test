const Post = ({ handleLikeClick, id, author, text, like }) => {
  const colour = like ? { background: "red" } : { background: "green" };

  return (
    <article className="post_container">
      <h3>{author}</h3>
      <p>{text}</p>
      <button className="button__like" onClick={() => handleLikeClick(id)} style={colour}>
        {like ? "Unlike" : "Like"}
      </button>
    </article>
  );
};

export default Post;

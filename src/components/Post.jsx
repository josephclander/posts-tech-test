const Post = ({ deletePost, handleLikeClick, id, author, text, like }) => {
  const likeStyle = like ? { background: "red" } : { background: "green" };

  return (
    <article className="post_container">
      <h3>{author}</h3>
      <p>{text}</p>
      <button onClick={() => handleLikeClick(id)} style={likeStyle}>
        {like ? "Unlike" : "Like"}
      </button>
      {author === "You" && <button onClick={() => deletePost(id)}>Delete</button>}
    </article>
  );
};

export default Post;

// src/components/Post.jsx

const Post = ({ editMode, deletePost, likePost, id, author, text, like }) => {
  const likeStyle = like ? { background: "#f86868" } : { background: "#8de88d" }; // red and green

  return (
    <article className="post_container">
      <h3>{author}</h3>
      <p>{text}</p>
      <button onClick={() => likePost(id)} style={likeStyle}>
        {like ? "Unlike" : "Like"}
      </button>
      {author === "You" && (
        <button onClick={() => deletePost(id)}>Delete</button>
      )}
      {author === "You" && <button onClick={() => editMode(id)}>Edit</button>}
    </article>
  );
};

export default Post;

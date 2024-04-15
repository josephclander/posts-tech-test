const Post = ({author, text}) => {
  return (
    <article className="post_container">
      <h3>{author}</h3>
      <p>{text}</p>
    </article>
  );
};

export default Post;

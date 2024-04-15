import { useState } from "react";
import CreatePostForm from "./components/CreatePostForm";

import postsData from "./postsData.json";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState(postsData);

  const addPost = (postData) => {
    setPosts((prevPosts) => [postData, ...prevPosts]);
  };

  const handleLikeClick = (id) => {
    setPosts(prevPosts => {
      return prevPosts.map(post => {
        return post.id === id ? {...post, like: !post.like} : post;
      })
    })
  };

  return (
    <div className="App">
      <h2>Create Post</h2>
      <CreatePostForm addPost={addPost} />
      <h2>Recent Posts</h2>
      {posts.map((post) => (
        <Post handleLikeClick={handleLikeClick} key={post.id} {...post} />
      ))}
    </div>
  );
}

export default App;

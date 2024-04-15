import { useState } from "react";
import CreatePostForm from "./components/CreatePostForm";

import postsData from "./postsData.json";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState(postsData);

  return (
    <div className="App">
      <h2>Create Post</h2>
      <CreatePostForm />
      <h2>Recent Posts</h2>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

export default App;

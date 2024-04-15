import postsData from "./postsData.json";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <h2>Create Post</h2>
      <h2>Recent Posts</h2>
      {postsData.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

export default App;

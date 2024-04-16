import { useState } from "react";
import CreatePostForm from "./components/CreatePostForm";
import EditModal from "./components/EditModal";
import postsData from "./postsData.json";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState(postsData);
  const [editStatus, toggleEditStatus] = useState(false);
  const [editingText, setEditingText] = useState('');

  const addPost = (postData) => {
    setPosts((prevPosts) => [postData, ...prevPosts]);
  };

  const deletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  const toggleModal = () => toggleEditStatus((prevState) => !prevState);

  const editMode = (id) => {
    toggleModal();
    setEditingText(posts.filter((post) => post.id === id)[0]["text"]);

    // click submit to add info
    // EXTRA - add "(edited)" in modal at bottom of textto the end of text
    // modal hides
    // rerenders list
  };

  const likePost = (id) => {
    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        return post.id === id ? { ...post, like: !post.like } : post;
      });
    });
  };

  return (
    <>
      {editStatus && (
        <EditModal
          editMode={editMode}
          editingText={editingText}
          toggleModal={toggleModal}
        />
      )}
      <div className="App">
        <h2>Create Post</h2>
        <CreatePostForm addPost={addPost} />
        <h2>Recent Posts</h2>
        {posts.map((post) => (
          <Post
            editMode={editMode}
            deletePost={deletePost}
            likePost={likePost}
            key={post.id}
            {...post}
          />
        ))}
      </div>
    </>
  );
}

export default App;

// src/App.jsx

import { useState } from "react";
import CreatePostForm from "./components/CreatePostForm";
import EditModal from "./components/EditModal";
import postsData from "./postsData.json";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState(postsData);
  const [editStatus, toggleEditStatus] = useState(false);
  const [postToEdit, setPostToEdit] = useState("");

  const addPost = (postData) => {
    // if post exists update it or add it to the top of the list
    let isUpdated = false;
    const updatedPosts = posts.map((post) => {
      if (post.id === postData.id) {
        isUpdated = true;
        return postData;
      } else {
        return post;
      }
    });

    isUpdated
      ? setPosts(updatedPosts)
      : setPosts((prevPosts) => [postData, ...prevPosts]);
  };

  const deletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  const toggleModal = () => toggleEditStatus((prevState) => !prevState);

  const editMode = (id) => {
    toggleModal();
    setPostToEdit(posts.filter((post) => post.id === id)[0]);
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
          addPost={addPost}
          editMode={editMode}
          postToEdit={postToEdit}
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

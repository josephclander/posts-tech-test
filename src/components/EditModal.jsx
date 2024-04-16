// src/components/EditModal.jsx

import CreatePostForm from "./CreatePostForm";

const EditModal = ({ addPost, postToEdit, toggleModal }) => {
  return (
    <div className="modal__edit">
      <CreatePostForm
        addPost={addPost}
        postToEdit={postToEdit}
        toggleModal={toggleModal}
      />
      <button onClick={toggleModal} className="modal__button">
        X
      </button>
    </div>
  );
};

export default EditModal;

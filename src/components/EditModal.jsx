import CreatePostForm from "./CreatePostForm";

const EditModal = ({ editingText, toggleModal }) => {

  return (
    <div className="modal__edit">
      <CreatePostForm addPost={null} editingText={editingText} />
      <button onClick={toggleModal} className="modal__button">X</button>
    </div>
  );
};

export default EditModal;

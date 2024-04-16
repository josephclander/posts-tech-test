import CreatePostForm from "./CreatePostForm";

const EditModal = ({editingText}) => {
  return (
     
      <div className="modal__edit">
        <CreatePostForm addPost={null} editingText={editingText} />
      </div>
    
  );
};

export default EditModal;

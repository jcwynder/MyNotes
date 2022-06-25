import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer"></div>
      <small>{date}</small>
      <MdDeleteForever
        onClick={() => handleDeleteNote(id)}
        className="delete-icon"
        size="1.3em"
      />
    </div>
  );
};

export default Note;

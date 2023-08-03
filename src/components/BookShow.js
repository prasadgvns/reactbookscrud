import { useState } from "react";
import EditBook from "./EditBook";

function BookShow({ book, onDelete, onEdit }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleDEditClick = () => {
    setIsEdit(!isEdit);
  };

  const handleEditSubmit = (id, title) => {
    onEdit(id, title);
    setIsEdit(!isEdit);
  };

  const CardComponent = () => {
    return (
      <div>
        <img
          className="card-img-top"
          src={`https://picsum.photos/seed/${book.id}/300/200`}
          alt="randomPhotos"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <button className="btn btn-warning" onClick={handleDeleteClick}>
            Delete
          </button>
          <button
            className="btn btn-primary"
            onClick={handleDEditClick}
            style={{ float: "right" }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="col-sm">
      <div className="card m-3" style={{ width: "20rem" }}>
        {isEdit ? (
          <EditBook book={book} handleEditSubmit={handleEditSubmit} />
        ) : (
          <CardComponent />
        )}
      </div>
    </div>
  );
}

export default BookShow;

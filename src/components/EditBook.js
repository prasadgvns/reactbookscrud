import { useState } from "react";

function EditBook({ book, handleEditSubmit }) {
  const [title, setTitle] = useState(book.title);

  const hanleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditSubmit(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-3">
        <label htmlFor="booktitle" className="form-label">
          Book Title
        </label>
        <input
          type="text"
          className="form-control"
          id="booktitle"
          value={title}
          onChange={hanleTitleChange}
          required
        />
        <button type="submit" className="btn btn-primary mt-2">
          Save
        </button>
      </div>
    </form>
  );
}

export default EditBook;

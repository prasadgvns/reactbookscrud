import { useState } from "react";

function CreateBook({ onCreate }) {
  const [title, setTitle] = useState("");

  const hanleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
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

        <div>
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateBook;

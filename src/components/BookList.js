import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const renderBooks = books.map((book) => {
    return <BookShow book={book} onDelete={onDelete} onEdit={onEdit} />;
  });

  return <div className="row">{renderBooks}</div>;
}

export default BookList;

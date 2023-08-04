import { useState } from "react";
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBook = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];

    setBooks(updatedBook);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book, index) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookById = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className="container">
      <CreateBook onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  );
}

export default App;

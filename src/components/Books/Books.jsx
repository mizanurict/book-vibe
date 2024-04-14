/** @format */

import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
        .then(data=>setBooks(data))
    }, [])
  return (
      <div className="my-24">
          <h1 className="text-center text-5xl font-bold mb-8">Books</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-4">
          {
              books.map(book => <Book
                  key={ book.bookId }
                  book={book}
              ></Book>)
          }
    </div>
      </div>
  );
};

export default Books;

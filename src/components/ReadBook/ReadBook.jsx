/** @format */

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStorageBook } from "../../utility/localStorage";
import SingleReadBook from "../SingleReadBook/SingleReadBook";

const ReadBook = () => {
    
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  
  useEffect(() => {
    const storeBookIds = getStorageBook();
    if (books.length > 0) {
      const readBook = books.filter((book) => storeBookIds.includes(book.bookId));
      setReadBooks(readBook);
    }
  }, [books]);
 
  
  return (
    <div>
          {
              readBooks.map((readBook, idx) => (<SingleReadBook
                  key={ idx }
                  readBook={readBook}
              >
              </SingleReadBook>
              )) 
      }
    </div>
  );
};

export default ReadBook;

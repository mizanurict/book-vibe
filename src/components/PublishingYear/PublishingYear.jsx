import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStorageBook } from "../../utility/localStorage";
import SingleReadBook from "../SingleReadBook/SingleReadBook";

const PublishingYear = () => {
    const books = useLoaderData();
 
    const [readBooksFromLocalStorage, setReadBooksFromLocalStorage] = useState([]);
    useEffect(() => {
      const storeBookIds = getStorageBook();
      if (books.length > 0) {
        const readBooks = books.filter((book) => storeBookIds.includes(book.bookId));
        setReadBooksFromLocalStorage(readBooks);
      }
    }, [books]);
    readBooksFromLocalStorage.sort((a, b) => {
      return b.yearOfPublishing - a.yearOfPublishing;
    })
    return (
        <div>
            {
              readBooksFromLocalStorage.map((readBook, idx) => (<SingleReadBook
                  key={ idx }
                  readBook={readBook}
              >
              </SingleReadBook>
              )) 
      }
        </div>
    );
};

export default PublishingYear;
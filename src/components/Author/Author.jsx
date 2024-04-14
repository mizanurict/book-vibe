import { useLoaderData } from "react-router-dom";
import SingleAuthor from "../SingleAuthor/SingleAuthor";


const Author = () => {
    const books = useLoaderData();

    return (
        <div>
            
            <h1 className="my-6 text-4xl font-bold text-center text-orange-500">All Author</h1>
            <hr className="border-2 rounded-xl border-blue-500" />
            <div className="grid grid-cols-2 lg:grid-cols-4 justify-center my-8 items-center gap-6">
            {
                books.map(book=><SingleAuthor key={book.bookId} book={book}></SingleAuthor>)
            }
            </div>
        </div>
    );
};

export default Author;
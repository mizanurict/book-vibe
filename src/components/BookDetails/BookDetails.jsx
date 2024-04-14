/** @format */

import { useLoaderData, useParams } from "react-router-dom";
import { saveBooks } from '../../utility/localStorage';
import { saveWishBooks } from "../../utility/localStorageTwo";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const book = books.find((book) => book.bookId === parseInt(bookId));
  const { image, totalPages, publisher, yearOfPublishing, bookName, author, category, rating, tags, review } = book;
  const handleAlert = () => {
    saveBooks(parseInt(bookId));
  }
  const handleAlertTwo = () => {
    saveWishBooks(parseInt(bookId));
  }
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl flex flex-col lg:flex-row gap-8 p-4 my-8">
        <div className="w-full lg:w-1/2 flex justify-center items-center bg-slate-200 rounded-xl py-2">
          <figure className="w-1/2 rounded-xl ">
            <img src={image} alt="Movie" />
          </figure>
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <hr />
          <h2>{category}</h2>
                  <hr />
                  <p><span className="font-bold">Review :</span> { review } </p>
                  <div className=" flex gap-4"><span className="font-bold">Tag</span>
                      {
                          tags.map((tag, idx) => <span key={idx} className="py-1 px-2 rounded-full text-yellow-500 font-semibold bg-slate-100">{ tag}</span>)
                  }
          </div>
          <hr />
          <table >
            <tr>
              <td className=" pr-12 ">Number of Pages:</td>
              <td>{totalPages}</td>
            </tr>
            <tr>
              <td className="py-4">Publisher:</td>
              <td>{publisher}</td>
            </tr>
            <tr>
              <td>Year of Publishing:</td>
              <td>{ yearOfPublishing}</td>
            </tr>
            <tr>
              <td className="pt-4">Rating:</td>
              <td>{rating} </td>
            </tr>
          </table>

          <div className="flex gap-4">
            <button onClick={()=>handleAlert()} className=" btn btn-outline btn-accent">Read</button>
            <button onClick={()=>handleAlertTwo()} className="btn btn-secondary">Wishlist</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDetails;

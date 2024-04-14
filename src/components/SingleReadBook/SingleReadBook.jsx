import { GoPeople } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import { AiFillFileText } from "react-icons/ai";
import { Link} from "react-router-dom";
import PropTypes from 'prop-types';

const SingleReadBook = ({readBook}) => {
    const { bookId,bookName, image, author,tags,publisher,yearOfPublishing, totalPages,category, rating} = readBook;
    return (
      <div>
             <div className="card card-side border bg-base-100 shadow-xl flex flex-col lg:flex-row gap-8 p-4 my-8">
        <div className="w-full lg:w-1/3 flex justify-center items-center bg-slate-200 rounded-xl py-2">
          <figure className="w-1/2 rounded-xl ">
            <img src={image} alt="Movie" />
          </figure>
        </div>
        <div className="w-full lg:w-2/3 space-y-4">
          <h2 className="card-title text-xl font-semibold">{bookName}</h2>
                    <p>By : { author}</p>

          <div className="flex gap-4 ">
                        <h2 > <span className="font-bold mr-4">Tag</span> { tags.map((tag, idx) => <span key={idx} className="mr-3 px-2 py-1 bg-slate-100 rounded-full font-semibold text-orange-400" >#{ tag}</span>)}</h2>
            <p className="flex items-center gap-2">
              <SlLocationPin /> Year of Publishing: {yearOfPublishing}
            </p>
          </div>
          <div className="flex gap-4">
            <p className="flex items-center gap-2">
              <GoPeople />
              Publisher: {publisher}
            </p>
            <p className="flex items-center gap-2">
              <AiFillFileText /> Pages {totalPages}
            </p>
          </div>

          <hr />

          <div className="flex gap-4">
            <p className="px-2 py-1 bg-slate-100 text-blue-400 rounded-full">Category: {category} </p>
                        <p className="px-2 py-1 bg-slate-100 text-red-400 rounded-full">Rating: { rating}</p>
            <Link to={`details/${bookId}`} className="px-3 py-2 bg-orange-500 text-white rounded-full">View Details</Link>
          </div>
        </div>
      </div>
        </div>
    );
};

SingleReadBook.propTypes = {
    readBook:PropTypes.object.isRequired
}
export default SingleReadBook;
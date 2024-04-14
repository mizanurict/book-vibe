import PropTypes from 'prop-types';
import { IoIosStarOutline } from "react-icons/io";
import { NavLink } from 'react-router-dom';
const Book = ({ book }) => {
    
    const {bookId, image, bookName, author, category, rating, tags } = book;
    
   
    return (
        <NavLink to={`bookDetails/${bookId}`}>
        <div className="card w-auto bg-base-100 shadow-xl border p-8 space-y-4">
            <div className="bg-slate-100 pb-8 rounded-xl">
            <figure className="px-10 pt-10  mx-auto">
          <img src={image} alt="Shoes" className="rounded-xl h-64 w-52" />
        </figure>
        </div>
            <div className="items-start space-y-3">
                <div className="flex gap-4">
                    {tags.map((tag,idx)=><p key={idx} className="px-2 py-1 text-yellow-500 font-semibold bg-slate-100 rounded-full">{tag}</p>)}
                </div>
          <h2 className="card-title">{bookName}</h2>
                <p>By : { author}</p>
            </div>
            <hr className="border-dashed" />
            <div className="flex justify-between items-center">
                <span>{ category }</span>
                <div className="flex gap-2 items-center">
                    <span>{ rating }</span>
                    <IoIosStarOutline />
                </div>
            </div>
      </div></NavLink>
    );
};
Book.propTypes = {
    book: PropTypes.object.isRequired
}

export default Book;
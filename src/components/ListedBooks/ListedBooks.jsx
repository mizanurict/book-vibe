/** @format */
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";


const ListedBooks = () => {
  const [click, setClick] = useState(0);

  return (
    <div>
      <h1 className="p-8 bg-slate-100 rounded-xl text-center text-4xl font-bold">Books</h1>
      <div className="dropdown dropdown-bottom flex justify-center items-center my-5">
        <div tabIndex={0} role="button" className="btn m-1 btn-warning text-white font-semibold text-xl">
          Sort By <span className=" text-white "> <MdKeyboardArrowDown size={40}/></span>
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
          <li>
            <Link to='rating' >Rating</Link>
          </li>
          <li>
          <Link to='numberOfPages' >Number of pages</Link>
          </li>
          <li>
          <Link to='publishingYear' >Publisher year</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
            <Link
              to=''
              onClick={() => setClick(0)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                click === 0 ? "border border-b-0" : "border-b"
              } dark:border-gray-600 dark:text-gray-600 rounded-t-lg`}
            >
              
              <span>Read Books</span>
            </Link>
            <Link
              to='wishlistBook'
              onClick={() => setClick(1)}
              className={` flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                click === 1 ? "border border-b-0" : "border-b"
              } dark:border-gray-600 dark:text-gray-600 rounded-t-lg`}
            >
              
              <span>Wishlist Books</span>
              </Link>                       

      </div>
      
          <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;

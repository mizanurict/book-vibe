/** @format */

import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero rounded-xl bg-base-200 p-16 my-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="banner-book.png" className="max-w-sm rounded-lg shadow-2x" />
        <div className="space-y-8">
          <h1 className="text-5xl font-bold pr-24">Books to freshen up your bookshelf</h1>
          
          <NavLink to='/listedBooks' className="btn btn-warning">View The List</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;

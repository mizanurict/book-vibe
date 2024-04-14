import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStorageWishBook } from "../../utility/localStorageTwo";
import SingleWishlistBook from "../SingleWishlistBook/SingleWishlistBook";


const WishlistBook = () => {
    const wishlists = useLoaderData();
    const [wishlistBooks, setWishlistBooks] = useState([])
    useEffect(() => {
        const storeWishlistIds = getStorageWishBook();
        if (wishlists.length > 0) {
            const readWishlist = wishlists.filter(wishlist => storeWishlistIds.includes(wishlist.bookId));
            setWishlistBooks(readWishlist)
        }
    },[wishlists])
    return (
        <div>
             {
              wishlistBooks.map((wishlistBook, idx) => <SingleWishlistBook key={idx} wishlistBook={wishlistBook}></SingleWishlistBook> ) 
          }
        </div>
    );
};

export default WishlistBook;
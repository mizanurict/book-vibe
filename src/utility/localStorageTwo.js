import Swal from 'sweetalert2'
const getStorageWishBook = () => {
    const storeWishBook = localStorage.getItem('wishlist')
    if (storeWishBook) {
        return JSON.parse(storeWishBook);
    } else {
        return [];
    }
}

const getStorageBookTwo = () => {
    const storeBook = localStorage.getItem('books')
    if (storeBook) {
        return JSON.parse(storeBook);
    } else {
        return [];
    }
}


const saveWishBooks = id => {

    const storeBookTwo = getStorageBookTwo();
    const exitTwo=storeBookTwo.find(bookIdTwo=>bookIdTwo===id)

    const storeWishBooks = getStorageWishBook();
    const isExit = storeWishBooks.find(bookId => bookId === id)
    if (!isExit && !exitTwo) {
        storeWishBooks.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storeWishBooks))
        Swal.fire({
            title: "Good job!",
            text: "Books added to wishlist",
            icon: "success"
          });
    } else {
        Swal.fire({
            icon: "error",
            title: "You have already wishlist",
            
          });
    }
}

export {saveWishBooks, getStorageWishBook}
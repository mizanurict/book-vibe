import Swal from 'sweetalert2'
const getStorageBook = () => {
    const storeBook = localStorage.getItem('books')
    if (storeBook) {
        return JSON.parse(storeBook);
    } else {
        return [];
    }
}

const saveBooks = id => {
    const storeBooks = getStorageBook();
    const isExit = storeBooks.find(bookId => bookId === id)
    if (!isExit) {
        storeBooks.push(id);
        localStorage.setItem('books', JSON.stringify(storeBooks))
        Swal.fire({
            title: "Good job!",
            text: "Books added to read list",
            icon: "success"
          });
    } else {
        Swal.fire({
            icon: "error",
            title: "You have already read this books",
            
          });
    }
}

export {saveBooks, getStorageBook}
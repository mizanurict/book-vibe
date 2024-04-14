import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Root from './components/Root/Root.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesRead from './components/PagesRead/PagesRead.jsx';
import ReadBook from './components/ReadBook/ReadBook.jsx';
import WishlistBook from './components/WishlistBook/WishlistBook.jsx';
import Author from './components/Author/Author.jsx';
import About from './components/About/About.jsx';
import Rating from './components/Rating/Rating.jsx';
import NumberOfPages from './components/NumberOfPages/NumberOfPages.jsx';
import PublishingYear from './components/PublishingYear/PublishingYear.jsx';
import Details from './components/Details/Details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader:()=>fetch('https://mizanurict.github.io/books-data/books.json'),
        children: [
          {
            index:true,
            element: <ReadBook></ReadBook>,
            loader:()=>fetch('https://mizanurict.github.io/books-data/books.json')
          },
          {
            path: 'details/:bookId',
            element: <Details></Details>,
            loader:()=>fetch('https://mizanurict.github.io/books-data/books.json')
          },
          {
            path: 'wishlistBook/details/:bookId',
            element: <Details></Details>,
            loader:()=>fetch('https://mizanurict.github.io/books-data/books.json')
          },
          {
            path: 'rating',
            element: <Rating></Rating>,
            loader:()=>fetch('https://mizanurict.github.io/books-data/books.json')
          },
          {
            path: 'numberOfPages',
            element: <NumberOfPages></NumberOfPages>,
            loader:()=>fetch('https://mizanurict.github.io/books-data/books.json')
          },
          {
            path: 'publishingYear',
            element: <PublishingYear></PublishingYear>,
            loader:()=>fetch('https://mizanurict.github.io/books-data/books.json')
          },
          {
            path: 'wishlistBook',
            element: <WishlistBook></WishlistBook>,
            loader:()=>fetch('https://mizanurict.github.io/books-data/books.json')
          },
        ],
      },
      {
        path: '/pagesRead',
        element: <PagesRead></PagesRead>,
        loader:()=>fetch('https://mizanurict.github.io/books-data/books.json')
      },
      {
        path: '/bookDetails/:bookId',
        element: <BookDetails></BookDetails>,
        loader:()=>fetch('/books.json')
      },
      {
        path: '/author',
        element: <Author></Author>,
        loader:()=>fetch('/books.json')
      },
      {
        path: '/about',
        element: <About></About>
      }
    ],
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

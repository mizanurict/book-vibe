/** @format */

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStorageBook } from "../../utility/localStorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const PagesRead = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    const storeBookIds = getStorageBook();
    if (books.length > 0) {
      const readBook = books.filter((book) => storeBookIds.includes(book.bookId));
      setReadBooks(readBook);
    }
  }, []);
  const bookReadPage = readBooks.map((readBook) => {
    const objBook = {
      name: readBook.bookName,
      pages: readBook.totalPages,
    };
    return objBook;
  });
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div className="mt-24 flex justify-center items-center">
          <ResponsiveContainer  width="100%" height={400}>
      <BarChart width={1200} height={300} data={bookReadPage}>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Bar dataKey="pages" fill="#0088FE" shape={<TriangleBar />} label={{ position: "top" }}>
          {bookReadPage.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>      
      </ResponsiveContainer>
    </div>
  );
};

export default PagesRead;

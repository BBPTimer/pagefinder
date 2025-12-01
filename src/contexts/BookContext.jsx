import { createContext, useState } from "react";

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [page, setPage] = useState(localStorage.getItem("page") || "");
  const [percent, setPercent] = useState(localStorage.getItem("percent") || "");

  const [book, setBook] = useState(
    JSON.parse(localStorage.getItem("book")) || null
  );

  const [bookList, setBookList] = useState([]);

  return (
    <BookContext.Provider
      value={{
        page,
        setPage,
        percent,
        setPercent,
        book,
        setBook,
        bookList,
        setBookList,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

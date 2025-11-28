import { useState } from "react";
import "./App.css";
import Book from "./classes/Book";
import BookInfo from "./components/BookInfo";
import BookCards from "./components/BookCards";
import Calculator from "./components/Calculator";
import Search from "./components/Search";

function App() {
  const [book, setBook] = useState();

  const [bookList, setBookList] = useState([]);

  return book ? (
    <>
      <BookInfo book={book} setBook={setBook} setBookList={setBookList} />
      <br />
      <br />
      <Calculator book={book} />
    </>
  ) : (
    <>
      <Search setBookList={setBookList} />
      <br />
      <br />
      <BookCards bookList={bookList} setBook={setBook} />
    </>
  );
}

export default App;

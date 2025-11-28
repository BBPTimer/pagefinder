import { useState } from "react";
import "./App.css";
import BookCards from "./components/BookCards";
import BookInfo from "./components/BookInfo";
import Calculator from "./components/Calculator";
import Search from "./components/Search";

function App() {
  const [book, setBook] = useState(
    JSON.parse(localStorage.getItem("book")) || null
  );

  const [bookList, setBookList] = useState([]);

  return book ? (
    <>
      <h1>PageFinder</h1>
      <BookInfo book={book} setBook={setBook} setBookList={setBookList} />
      <br />
      <br />
      <Calculator book={book} />
    </>
  ) : (
    <>
      <h1>Welcome to PageFinder!</h1>
      <p>
        PageFinder will convert page number to percent read, and back again!
        <br />
        <br />
        Search for any book to get started!
      </p>
      <Search setBookList={setBookList} />
      <br />
      <br />
      <BookCards bookList={bookList} setBook={setBook} />
    </>
  );
}

export default App;

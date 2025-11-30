import { useState } from "react";
import "./App.css";
import BookCards from "./components/BookCards";
import BookInfo from "./components/BookInfo";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import Search from "./components/Search";

function App() {
  // Check if user has book in local storage
  const [book, setBook] = useState(
    JSON.parse(localStorage.getItem("book")) || null
  );

  const [bookList, setBookList] = useState([]);

  // Conditionally render search or book info
  return book ? (
    <>
      <h1>PageFinder</h1>
      <BookInfo book={book} setBook={setBook} setBookList={setBookList} />
      <br />
      <br />
      <Calculator book={book} />
      <Footer />
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
      <BookCards bookList={bookList} setBook={setBook} />
      <Footer />
    </>
  );
}

export default App;

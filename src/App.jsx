import { useState } from "react";
import "./App.css";
import Book from "./classes/Book";
import BookInfo from "./components/BookInfo";
import BookCards from "./components/BookCards";
import Calculator from "./components/Calculator";
import Search from "./components/Search";

function App() {
  const [book, setBook] = useState(
    new Book(
      "VswAEAAAQBAJ",
      "A Court of Thorns and Roses",
      ["Sarah J. Maas"],
      9781526634245,
      451,
      "https://books.google.com/books/content?id=VswAEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    )
  );

  const [bookList, setBookList] = useState([]);

  return (
    <>
      <Search setBookList={setBookList} />
      <br />
      <br />
      <BookCards bookList={bookList} setBook={setBook}/>
      <br />
      <br />
      <BookInfo book={book} />
      <br />
      <br />
      <Calculator book={book} />
    </>
  );
}

export default App;

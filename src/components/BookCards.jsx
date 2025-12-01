import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookCard from "./BookCards/BookCard";

const BookCards = () => {
  const { bookList } = useContext(BookContext);

  const lastIndex = bookList.length - 1;

  const bookCards = bookList.map((book, index) => (
    <BookCard book={book} lastIndex={index === lastIndex} key={book.id} />
  ));

  return <>{bookCards}</>;
};

export default BookCards;

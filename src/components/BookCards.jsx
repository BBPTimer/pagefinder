import BookCard from "./BookCards/BookCard";

const BookCards = ({ bookList, setBook }) => {
  const lastIndex = bookList.length - 1;

  const bookCards = bookList.map((book, index) => (
    <BookCard book={book} setBook={setBook} lastIndex={index === lastIndex} key={book.id} />
  ));

  return <>{bookCards}</>;
};

export default BookCards;

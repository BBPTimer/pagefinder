import BookCard from "./BookCards/BookCard";

const BookCards = ({ bookList, setBook }) => {
  const bookCards = bookList.map((book, index) => (
    <BookCard book={book} setBook={setBook} key={index} />
  ));

  return <>{bookCards}</>;
};

export default BookCards;

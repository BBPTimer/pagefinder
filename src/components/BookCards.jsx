import BookCard from "./BookCards/BookCard";

const BookCards = ({ bookList, setBook }) => {
  const bookCards = bookList.map((book) => (
    <BookCard book={book} setBook={setBook} key={book.volumeInfo.id} />
  ));

  return <>{bookCards}</>;
};

export default BookCards;

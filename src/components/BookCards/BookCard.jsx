import Book from "../../classes/Book";

const BookCard = ({ book, setBook, lastIndex }) => {
  const handleBookSelect = () => {
    // Create new Book
    const selectedBook = new Book(
      book.volumeInfo.id,
      book.volumeInfo.title,
      book.volumeInfo.authors,
      book.volumeInfo.pageCount,
      typeof book.volumeInfo.imageLinks === "undefined"
        ? null
        : book.volumeInfo.imageLinks.thumbnail.replace("http", "https")
    );

    setBook(selectedBook);

    // Add book to local storage
    localStorage.setItem("book", JSON.stringify(selectedBook));
  };

  return (
    <>
      <i>Title:</i> {book.volumeInfo.title}
      <br />
      <i>Author(s):</i> {book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}
      <br />
      <i>Page Count:</i> {book.volumeInfo.pageCount}
      <br />
      <br />
      {book.volumeInfo.imageLinks && (
        <img
          src={book.volumeInfo.imageLinks.thumbnail.replace("http", "https")}
        />
      )}
      <br />
      <button onClick={handleBookSelect}>Select</button>
      {!lastIndex && <hr />}
    </>
  );
};

export default BookCard;

import Book from "../../classes/Book";

const BookCard = ({ book, setBook }) => {
  const handleBookSelect = () => {
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

    localStorage.setItem("book", JSON.stringify(selectedBook));
  };

  return (
    <>
      Title: {book.volumeInfo.title}
      <br />
      Author(s): {book.volumeInfo.authors}
      <br />
      Page Count: {book.volumeInfo.pageCount}
      <br />
      <br />
      {book.volumeInfo.imageLinks && (
        <img
          src={book.volumeInfo.imageLinks.thumbnail.replace("http", "https")}
        />
      )}
      <br />
      <button onClick={handleBookSelect}>Select</button>
      <hr />
    </>
  );
};

export default BookCard;

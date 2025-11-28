const BookInfo = ({ book, setBook, setBookList }) => {
  const handleResetButton = () => {
    // Clear search results
    setBookList([]);
    // Clear book
    setBook();

    // Clear local storage
    localStorage.removeItem("book");
  }

  return (
    <>
      Title: {book.title}
      <br />
      Author(s): {book.authors && book.authors.join(", ")}
      <br />
      <br />
      <img src={book.thumbnail} />
      <br />
      <button onClick={handleResetButton}>Search Again</button>
    </>
  );
};

export default BookInfo;

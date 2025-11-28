const BookInfo = ({ book, setBook, setBookList }) => {
  const handleResetButton = () => {
    setBookList([]);
    setBook();
  }

  return (
    <>
      Title: {book.title}
      <br />
      Author(s): {book.authors}
      <br />
      <br />
      <img src={book.thumbnail} />
      <br />
      <button onClick={handleResetButton}>Search Again</button>
    </>
  );
};

export default BookInfo;

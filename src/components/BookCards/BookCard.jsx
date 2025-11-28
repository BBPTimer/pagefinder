const BookCard = ({ book, setBook }) => {
  return (
    <>
      Title: {book.volumeInfo.title}
      <br />
      Author(s): {book.volumeInfo.authors}
      <br />
      Page Count: {book.volumeInfo.pageCount}
      <br />
      {book.volumeInfo.imageLinks && (
        <img src={book.volumeInfo.imageLinks.thumbnail} />
      )}
      <hr />
    </>
  );
};

export default BookCard;

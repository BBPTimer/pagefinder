const BookInfo = ({ book }) => {
  return (
    <>
      <img src={book.thumbnail} />
      <br />
      <br />
      Title: {book.title}
      <br />
      Author(s): {book.authors}
    </>
  );
};

export default BookInfo;

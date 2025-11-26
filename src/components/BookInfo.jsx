import Book from "../classes/Book";

const BookInfo = () => {
  const book = new Book(
    "VswAEAAAQBAJ",
    "A Court of Thorns and Roses",
    ["Sarah J. Maas"],
    9781526634245,
    451,
    "http://books.google.com/books/content?id=VswAEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  );

  return (
    <>
      Title: {book.title}
      <br />
      Author(s): {book.authors}
    </>
  );
};

export default BookInfo;

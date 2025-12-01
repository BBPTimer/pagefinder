import { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const BookInfo = () => {
  const { setPage, setPercent, book, setBook, setBookList } =
    useContext(BookContext);

  const [isEditingPageCount, setIsEditingPageCount] = useState(false);

  const handleEditPageCount = (event) => {
    event.preventDefault();

    const updatedBook = { ...book, pageCount: event.target.pageCount.value };

    // Update page count
    setBook(updatedBook);

    // Reset page and percent
    setPage("");
    setPercent("");

    // Update local storage
    localStorage.setItem("book", JSON.stringify(updatedBook));
    localStorage.removeItem("page");
    localStorage.removeItem("percent");

    // Close form
    setIsEditingPageCount(false);
  };

  const handleResetButton = () => {
    // Clear search results
    setBookList([]);

    // Clear book
    setBook();

    // Clear local storage
    localStorage.clear();
  };

  return (
    <>
      <i>Title: </i>
      {book.title}
      <br />
      <i>Author(s): </i>
      {book.authors && book.authors.join(", ")}
      <br />
      <i>Page Count: </i>
      {isEditingPageCount ? (
        <form onSubmit={handleEditPageCount}>
          <input
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            id="pageCount"
            name="pageCount"
            min="1"
            max="9999"
            defaultValue={book.pageCount}
            required
          ></input>{" "}
          <button className="small">Save</button>
        </form>
      ) : (
        <>
          {book.pageCount}{" "}
          <button className="small" onClick={() => setIsEditingPageCount(true)}>
            Edit
          </button>
        </>
      )}
      <br />
      <br />
      <img src={book.thumbnail} />
      <br />
      <button className="small" onClick={handleResetButton}>
        Search Again
      </button>
    </>
  );
};

export default BookInfo;

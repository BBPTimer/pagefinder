import { useState } from "react";
import Book from "../classes/Book";

const Calculator = () => {
  const [pages, setPages] = useState("");
  const [percent, setPercent] = useState(0);

  const book = new Book(
    "VswAEAAAQBAJ",
    "A Court of Thorns and Roses",
    ["Sarah J. Maas"],
    9781526634245,
    451,
    "http://books.google.com/books/content?id=VswAEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  );

  const reset = () => {
    setPages("");
    setPercent(0);
  };

  const calculatePercent = (event) => {
    const pages = Math.round(event.target.value);

    console.log(pages);

    if (!pages) {
      reset();
      alert("Please enter numerical value");
      return;
    }

    if (pages < 0) {
      reset();
      alert("Please enter value greater than 0");
      return;
    }

    if (pages > book.pageCount) {
      reset();
      alert("Please enter value less than " + book.pageCount);
      return;
    }

    setPages(pages);
    setPercent(Math.round((pages / book.pageCount) * 100));
  };

  return (
    <>
      <label htmlFor="page">Page: </label>
      <input
        type="number"
        id="page"
        name="page"
        min="0"
        max={book.pageCount}
        value={pages}
        onChange={calculatePercent}
      />
      {" / "}
      {book.pageCount}
      {" pages = "}
      <b>
        {percent}
        {"%"}
      </b>
    </>
  );
};

export default Calculator;

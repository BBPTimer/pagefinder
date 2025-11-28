import { useState } from "react";

const Calculator = ({ book }) => {
  const [page, setPage] = useState(0);
  const [percent, setPercent] = useState(0);

  const calculatePercent = (event) => {
    setPage(Math.round(event.target.value));
    setPercent(Math.floor((event.target.value / book.pageCount) * 100));
  };

  const calculatePages = (event) => {
    setPercent(Math.round(event.target.value));
    setPage(Math.floor((event.target.value / 100) * book.pageCount));
  };

  return (
    <>
      <label htmlFor="page">Page </label>
      <input
        type="number"
        id="page"
        name="page"
        min="0"
        max={book.pageCount}
        value={page}
        onChange={calculatePercent}
      />
      {" / "}
      {book.pageCount}
      {" pages = "}
      <input
        type="number"
        id="percent"
        name="percent"
        min="0"
        max="100"
        value={percent}
        onChange={calculatePages}
      />
      <label htmlFor="percent"> %</label>
    </>
  );
};

export default Calculator;

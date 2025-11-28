import { useState } from "react";

const Calculator = ({ book }) => {
  const [page, setPage] = useState("");
  const [percent, setPercent] = useState("");

  const clearInput = () => {
    setPage("");
    setPercent("");
  };

  const calculatePercent = (event) => {
    if (!event.target.value) {
      clearInput();
    } else {
      setPage(Math.round(event.target.value));
      setPercent(Math.floor((event.target.value / book.pageCount) * 100));
    }
  };

  const calculatePages = (event) => {
    if (!event.target.value) {
      clearInput();
    } else {
      setPercent(Math.round(event.target.value));
      setPage(Math.floor((event.target.value / 100) * book.pageCount));
    }
  };

  return (
    <b>
      <label htmlFor="page">Page </label>
      <input
        type="number"
        inputMode="numeric"
        pattern="[0-9]*"
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
        inputMode="numeric"
        pattern="[0-9]*"
        id="percent"
        name="percent"
        min="0"
        max="100"
        value={percent}
        onChange={calculatePages}
      />
      <label htmlFor="percent"> %</label>
    </b>
  );
};

export default Calculator;

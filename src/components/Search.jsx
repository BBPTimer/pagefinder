import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Search = () => {
  const { setBookList } = useContext(BookContext);

  const search = (event) => {
    event.preventDefault();

    if (!event.target.search.value.trim()) {
      alert("Must enter search term");
      return;
    }

    // Remove leading and trailing white space, and replace other white space with plus for API
    getSearchResults(event.target.search.value.trim().replaceAll(" ", "+"));
  };

  const getSearchResults = async (search) => {
    let response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=" + search
    );
    let bookList = await response.json();
    setBookList(bookList.items);
  };

  return (
    <form onSubmit={search}>
      <input type="text" name="search"></input> <button>Search</button>
      <br />
      <br />
      {/* <p className="x-small">
        Search by Title, Author, Publisher, Subject, or ISBN
      </p> */}
    </form>
  );
};

export default Search;

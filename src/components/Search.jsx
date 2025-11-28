const Search = ({ setBookList }) => {
  const search = (event) => {
    event.preventDefault();

    // Remove leading and trailing white space, and replace other white space with plus for API
    test(event.target.search.value.trim().replaceAll(" ", "+"));
  };

  const test = async (search) => {
    let response = await fetch("https://www.googleapis.com/books/v1/volumes?q=" + search);
    let bookList = await response.json();
    setBookList(bookList.items);
  };

  return (
    <>
      <form onSubmit={search}>
        <input type="text" name="search"></input>
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Search;

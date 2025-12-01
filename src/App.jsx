import { useContext } from "react";
import "./App.css";
import BookCards from "./components/BookCards";
import BookInfo from "./components/BookInfo";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import Search from "./components/Search";
import { BookContext } from "./contexts/BookContext";

function App() {
  const { book } = useContext(BookContext);

  // Conditionally render search or book info
  return book ? (
    <>
      <h1>PageFinder</h1>
      <BookInfo />
      <br />
      <br />
      <Calculator />
      <Footer />
    </>
  ) : (
    <>
      <h1>Welcome to PageFinder!</h1>
      <p>
        PageFinder will convert page number to percent read, and back again!
        <br />
        <br />
        Search for any book to get started!
      </p>
      <Search />
      <BookCards />
      <Footer />
    </>
  );
}

export default App;

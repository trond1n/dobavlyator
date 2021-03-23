import { useState } from "react";
import "./App.css";
import AddBook from "./components/AddBook/AddBook";
import BookList from "./components/BookList/BookList";

function App() {
  const [book, setBook] = useState(null);

  return (
    <div className="App">
      {book && <BookList book={book} setBook={setBook} />}

      < AddBook setBook={setBook}/>

    </div>
  );
}

export default App;

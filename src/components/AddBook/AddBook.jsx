import React, { useEffect, useState } from "react";
import classes from "./AddBook.module.css";

const AddBook = (props) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [send, setSend] = useState(false);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    let object = Object.keys(localStorage).map((key) =>
      JSON.parse(localStorage.getItem(key))
    );
    props.setBook(object);
  }, []);

  // добавляем книгу
  const addBookToStorage = (e) => {
    e.preventDefault();

    if ((title === "" && name === "") || !title || !name) {
      setWarning(true);
    } else {
      const index = Math.floor(Math.random() * 100000);
      let object = Object.keys(localStorage).map((key) =>
        JSON.parse(localStorage.getItem(key))
      );
      props.setBook(object);
      const bookItem = { name, title };
      localStorage.setItem(index, JSON.stringify(bookItem));
      setName("");
      setTitle("");
      setSend(true);
      setWarning(false);
    }
  };

  const errorMessage = warning ? <p>Заполните оба поля</p> : null;
  const button = send ? (
    <button
      className={classes.form__button}
      onClick={(e) => addBookToStorage(e)}
    >
      Добавить еще одну
    </button>
  ) : (
    <button
      className={classes.form__button}
      onClick={(e) => addBookToStorage(e)}
    >
      Добавить
    </button>
  );

  return (
    <div className={classes.AddBook}>
      <h1>Добавить книгу</h1>

      <form>
        <label>Имя:</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Название книги:</label>

        <input
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {button}
        {errorMessage}
      </form>
    </div>
  );
};

export default AddBook;

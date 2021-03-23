import React, { useState } from "react";
import classes from "./BookList.module.css";

const BookList = (props) => {
  const [change, setChange] = useState(false);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [key, setKey] = useState("");
  const [warning, setWarning] = useState(false);

  //удаляем книгу
  const deleteBook = (id, object) => {
    localStorage.removeItem(id);
    props.setBook(object);
  };

  //изменяем книгу
  const changeBook = (e) => {
    e.preventDefault();

    if (title === "" && name === "") {
      setWarning(true);
    } else {
      const bookItem = { name, title };
      localStorage.setItem(key, JSON.stringify(bookItem));
      setName("");
      setTitle("");
      setWarning(false);
      setChange(false);
    }
  };

  const openFormHandler = (id, object) => {
    setChange(true);
    setName(object.name);
    setTitle(object.title);
    setKey(id);
  };

  let itemList = Object.keys(localStorage).map((key) => {
    let object = JSON.parse(localStorage.getItem(key));

    return (
      <li key={key}>
        <p>
          <strong>Имя автора: </strong> {object.name}
        </p>
        <p>
          {" "}
          <strong>Название книги: </strong> {object.title}
        </p>
        <button onClick={() => deleteBook(key, object)}>Удалить</button>
        <button onClick={(e) => openFormHandler(key, object)}>Изменить</button>
      </li>
    );
  });

  if (itemList.length === 0) {
    return (
      <div className={classes.no_books}>
        <h1>Похоже у вас еще нет книг...</h1>
        <p>Добавьте парочку</p>
      </div>
    );
  }
  console.log(itemList);

  const errorMessage = warning ? <p>Заполните оба поля</p> : null;

  const changeForm = (
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
      <button className={classes.form__button} onClick={(e) => changeBook(e)}>
        Изменить
      </button>
      {errorMessage}
    </form>
  );

  return (
    <ul className={classes.BookList}>
      <h1>Список книг</h1>
      {change ? changeForm : itemList}
    </ul>
  );
};

export default BookList;

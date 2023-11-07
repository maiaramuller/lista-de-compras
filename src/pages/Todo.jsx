import React, { useEffect, useState } from "react";
import List from "../components/List";
import Form from "../components/Form";
import "./Todo.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );

  const handleChangeInput = (event) => {
    const inputTask = event.target.value;

    setTask(inputTask);
  };

  const handleAddItemToList = (event) => {
    event.preventDefault();

    if (!task) {
      return;
    }

    setItemsList([...itemsList, task]);
    localStorage.setItem("task", JSON.stringify([...itemsList, task]));
    setTask("");
  };

  return (
    <div className="todo-wrapper">
      <h1>Lista de compras</h1>

      <Form
        handleAddItemToList={handleAddItemToList}
        handleChangeInput={handleChangeInput}
        task={task}
      />

      <List itemsList={itemsList} />
    </div>
  );
};

export default Todo;

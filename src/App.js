import "./styles.css";
import React, { useState } from "react";
import TodoList from "./TodoList";
export default function App() {
  const [task, setTask] = useState("");
  const [todoList, setList] = useState([]);
  const changeHandler = (event) => {
    setTask(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newTodoList = [...todoList, task];
    setList(newTodoList);
    setTask("");
  };
  const deleteHandler = (indexValue) => {
    const newList = todoList.filter((todo, index) => index !== indexValue);
    setList(newList);
  };
  return (
    <div>
      <center>
        <div>
          <h2>Todo Management App</h2>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="task"
              value={task}
              onChange={changeHandler}
            />
            <input type="submit" value="Add" name="Add" />
          </form>
          <TodoList todos={todoList} deleteHandler={deleteHandler} />
        </div>
      </center>
    </div>
  );
}

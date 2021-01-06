import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiCheckSquare, FiEdit } from "react-icons/fi";
import "./Todo.css";
const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    TodoId: null,
    TodoTitle: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.TodoId, value.TodoTitle);
    setEdit({
      TodoId: null,
      TodoTitle: "",
    });
  };

  if (edit.TodoId) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isCompleted ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.TodoId} onClick={() => completeTodo(todo.TodoId)}>
        {todo.TodoTitle}
      </div>
      <div className="icons">
        <RiDeleteBin6Line
          onClick={() => removeTodo(todo.TodoId)}
          className="delete-icon"
        />
        <FiEdit
          onClick={() =>
            setEdit({ TodoId: todo.TodoId, TodoTitle: todo.TodoTitle })
          }
          className="edit-icon"
        />
        <FiCheckSquare
          onClick={() => completeTodo(todo.TodoId)}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;

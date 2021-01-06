import * as actionTypes from "./actionTypes";
import axios from "../../axios-api";
import { v4 } from "uuid";

//add Todo
export const addTodoSuccess = (todo, bucketId) => {
  return {
    type: actionTypes.ADD_TODO,
    bucketId: bucketId,
    todo: todo,
  };
};

export const addTodo = (todoTitle, bucketId) => {
  const data = { BucketId: bucketId, TodoTitle: todoTitle };
  return (dispatch) => {
    axios
      .post("/api/v1/todo", data)
      .then((response) => dispatch(addTodoSuccess(response.data, bucketId)))
      .catch((error) => {
        const newTodo = {
          TodoId: v4(),
          TodoTitle: todoTitle,
          isCompleted: false,
        };
        dispatch(addTodoSuccess(newTodo, bucketId));
      });
  };
};

//update Todo
export const updateTodo = (todoId, todoTitle, bucketId) => {
  const data = { TodoTitle: todoTitle };
  return (dispatch) => {
    axios
      .put("/api/v1/todo/" + todoId, data)
      .then((response) => {
        if (response.status >= 200 && response.status < 300)
          dispatch(updateTodoSuccess(todoId, todoTitle, bucketId));
      })
      .catch((error) =>
        dispatch(updateTodoSuccess(todoId, todoTitle, bucketId))
      );
  };
};

export const updateTodoSuccess = (todoId, todoTitle, bucketId) => {
  return {
    type: actionTypes.UPDATE_TODO,
    TodoId: todoId,
    TodoTitle: todoTitle,
    bucketId: bucketId,
  };
};

//delete todo
export const deleteTodo = (todoId, bucketId) => {
  return (dispatch) => {
    axios
      .delete("/api/v1/todo/" + todoId)
      .then((response) => {
        if (response.status >= 200 && response.status < 300)
          dispatch(deleteTodoSuccess(todoId, bucketId));
      })
      .catch((error) => dispatch(deleteTodoSuccess(todoId, bucketId)));
  };
};
export const deleteTodoSuccess = (todoId, bucketId) => {
  return {
    type: actionTypes.DELETE_TODO,
    TodoId: todoId,
    bucketId: bucketId,
  };
};

//complete todo

export const completeTodo = (todoId, bucketId) => {
  const data = { isCompleted: true };
  return (dispatch) => {
    axios
      .put("/api/v1/todo/" + todoId, data)
      .then((response) => {
        if (response.status >= 200 && response.status < 300)
          dispatch(completeTodoSuccess(todoId, bucketId));
      })
      .catch((error) => dispatch(completeTodoSuccess(todoId, bucketId)));
  };
};

export const completeTodoSuccess = (todoId, bucketId) => {
  return {
    type: actionTypes.COMPLETE_TODO,
    TodoId: todoId,
    bucketId: bucketId,
  };
};

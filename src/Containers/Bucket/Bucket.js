import React from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/todo";
import TodoForm from "../../Components/TodoForm/TodoForm";
import Todo from "../../Components/Todo/Todo";
import "./Bucket.css";

function Bucket(props) {
  const addTodo = (todo) => {
    if (!todo.TodoTitle) {
      return;
    }
    props.onTodoCreateHandler(todo.TodoTitle, props.BucketId);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue) {
      return;
    }
    props.onTodoUpdateHandler(todoId, newValue, props.BucketId);
  };

  const removeTodo = (id) => {
    props.onTodoDeleteHandler(id, props.BucketId);
  };

  const completeTodo = (id) => {
    props.onTodoCompleteHandler(id, props.BucketId);
  };
  const bucketDetails = props.buckets.filter(
    (b) => b.bucketId === props.BucketId
  );

  const todoList = bucketDetails[0].Todo;

  return (
    <div className="bucket-class">
      <h1>{props.BucketName}</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todoList}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    buckets: state.bucketReducer.buckets,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoCreateHandler: (TodoTitle, bucketId) =>
      dispatch(actions.addTodo(TodoTitle, bucketId)),
    onTodoUpdateHandler: (TodoId, newTitle, bucketId) =>
      dispatch(actions.updateTodo(TodoId, newTitle, bucketId)),
    onTodoDeleteHandler: (TodoId, bucketId) =>
      dispatch(actions.deleteTodo(TodoId, bucketId)),
    onTodoCompleteHandler: (TodoId, bucketId) =>
      dispatch(actions.completeTodo(TodoId, bucketId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Bucket);

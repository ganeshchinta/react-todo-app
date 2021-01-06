import * as actionTypes from "../actions/actionTypes";
import { updateObject, copyArrayObject } from "../Utility";

const initialState = {
  buckets: [],
};
const createBucket = (state, action) => {
  return updateObject(state, { buckets: state.buckets.concat(action.bucket) });
};

const addTodo = (state, action) => {
  const bucketIndex = state.buckets.findIndex(
    (b) => b.bucketId === action.bucketId
  );
  const todoList = copyArrayObject(state.buckets[bucketIndex].Todo);
  const requiredBucket = {
    ...state.buckets[bucketIndex],
    Todo: todoList,
  };
  const updatedTodoList = [action.todo, ...requiredBucket.Todo];
  const updatedBucket = updateObject(requiredBucket, { Todo: updatedTodoList });

  const allBuckets = [...state.buckets];
  allBuckets[bucketIndex] = updatedBucket;
  return updateObject(state, { buckets: allBuckets });
};

const updateTodo = (state, action) => {
  const bucketIndex = state.buckets.findIndex(
    (b) => b.bucketId === action.bucketId
  );

  const todoList = copyArrayObject(state.buckets[bucketIndex].Todo);
  const requiredBucket = {
    ...state.buckets[bucketIndex],
    Todo: todoList,
  };

  const todoIndex = requiredBucket.Todo.findIndex(
    (t) => t.TodoId === action.TodoId
  );
  const updatedTodo = updateObject(requiredBucket.Todo[todoIndex], {
    TodoTitle: action.TodoTitle,
  });

  const updatedTodoList = [...requiredBucket.Todo];
  updatedTodoList[todoIndex] = updatedTodo;

  const updatedBucket = updateObject(requiredBucket, { Todo: updatedTodoList });

  const allBuckets = [...state.buckets];
  allBuckets[bucketIndex] = updatedBucket;

  return updateObject(state, { buckets: allBuckets });
};

const completeTodo = (state, action) => {
  const bucketIndex = state.buckets.findIndex(
    (b) => b.bucketId === action.bucketId
  );
  const todoList = copyArrayObject(state.buckets[bucketIndex].Todo);

  const requiredBucket = {
    ...state.buckets[bucketIndex],
    Todo: todoList,
  };

  const todoIndex = requiredBucket.Todo.findIndex(
    (t) => t.TodoId === action.TodoId
  );
  const updatedTodo = updateObject(todoList[todoIndex], {
    isCompleted: !todoList[todoIndex].isCompleted,
  });

  const updatedTodoList = [...requiredBucket.Todo];
  updatedTodoList[todoIndex] = updatedTodo;

  const updatedBucket = updateObject(requiredBucket, { Todo: updatedTodoList });

  const allBuckets = [...state.buckets];
  allBuckets[bucketIndex] = updatedBucket;

  return updateObject(state, { buckets: allBuckets });
};

const deleteTodo = (state, action) => {
  const bucketIndex = state.buckets.findIndex(
    (b) => b.bucketId === action.bucketId
  );
  const todoList = copyArrayObject(state.buckets[bucketIndex].Todo);
  const requiredBucket = {
    ...state.buckets[bucketIndex],
    Todo: todoList,
  };
  const updatedTodoList = requiredBucket.Todo.filter(
    (t) => t.TodoId !== action.TodoId
  );
  const updatedBucket = updateObject(requiredBucket, { Todo: updatedTodoList });

  const allBuckets = [...state.buckets];
  allBuckets[bucketIndex] = updatedBucket;
  return updateObject(state, { buckets: allBuckets });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_BUCKET:
      return createBucket(state, action);
    case actionTypes.ADD_TODO:
      return addTodo(state, action);
    case actionTypes.UPDATE_TODO:
      return updateTodo(state, action);
    case actionTypes.COMPLETE_TODO:
      return completeTodo(state, action);
    case actionTypes.DELETE_TODO:
      return deleteTodo(state, action);
    default:
      return state;
  }
};
export default reducer;

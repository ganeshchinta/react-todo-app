import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./Containers/App/App";
import bucketReducer from "./store/reducer/bucket";
import userReducer from "./store/reducer/user";
const rootReducers = combineReducers({
  bucketReducer: bucketReducer,
  userReducer: userReducer,
});
const store = createStore(rootReducers, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

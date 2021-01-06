import { Fragment } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ShowBuckets from "../../Containers/ShowBuckets/ShowBuckets";
import CreateBucket from "../../Components/CreateBucket/CreateBucket";
import * as actions from "../../store/actions/user";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

import "./App.css";

function App(props) {
  return (
    <div className="app">
      <div className="app-header">
        {props.autheticated ? (
          <Fragment>
            <div>
              <Link to="/home">
                <img
                  className="app-logo"
                  src="https://todogroup.org/img/logo.svg"
                  alt="Todo Logo"
                />
              </Link>
            </div>
            <div>
              <span>Hi {props.user.EmailId}</span>
              <button className="app-btn" onClick={props.OnSignOutHandler}>
                Sign Out
              </button>
            </div>
          </Fragment>
        ) : (
          <div>
            <img
              className="app-logo"
              src="https://todogroup.org/img/logo.svg"
              alt="Todo Logo"
            />
          </div>
        )}
      </div>
      <div className="main">
        {props.autheticated ? (
          <Switch>
            <Route path="/create-bucket" exact component={CreateBucket} />
            <Route path="/home" exact component={ShowBuckets} />
            <Route path="/" exact component={SignIn} />
            <Route path="/sign-up" exact component={SignUp} />
          </Switch>
        ) : (
          <div>
            <Switch>
              <Route path="/" exact component={SignIn} />
              <Route path="/sign-up" exact component={SignUp} />
            </Switch>
            <Redirect to="/" />
          </div>
        )}
      </div>

      <div className="app-footer">
        <p>Copyright © 2020 Todo App </p>
        <p>Contact us</p>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    autheticated: state.userReducer.autheticated,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    OnSignOutHandler: () => dispatch(actions.signOutUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

import { useState } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/user";
import "./SignUp.css";

function SignUp(props) {
  const [userDetails, setUserDetails] = useState({
    FirstName: "",
    LastName: "",
    EmailId: "",
    Password: "",
  });

  const changeHandler = (event, inputField) => {
    const updatedUserDetails = { ...userDetails };
    updatedUserDetails[inputField] = event.target.value;
    setUserDetails(updatedUserDetails);
  };

  const onSignUpHandler = () => {
    if (
      !userDetails.EmailId ||
      !userDetails.FirstName ||
      !userDetails.LastName ||
      !userDetails.Password
    )
      return;

    props.OnSignUpHandler(userDetails);
    props.history.replace("/");
  };
  return (
    <div>
      <section className="main2">
        <div className="loginContainer">
          <div className="signupPage">
            <h2>Signup</h2>
            <div className="row">
              <input
                type="text"
                name="FirstName"
                value={userDetails.FirstName}
                onChange={(event) => changeHandler(event, "FirstName")}
                placeholder="FirstName"
              />
            </div>
            <div className="row">
              <input
                type="text"
                name="LastName"
                value={userDetails.LastName}
                onChange={(event) => changeHandler(event, "LastName")}
                placeholder="LastName"
              />
            </div>
            <div className="row">
              <input
                type="password"
                name="Password"
                value={userDetails.Password}
                onChange={(event) => changeHandler(event, "Password")}
                placeholder="Password"
              />
            </div>
            <div className="row">
              <input
                type="email"
                name="Email"
                value={userDetails.EmailId}
                onChange={(event) => changeHandler(event, "EmailId")}
                placeholder="Email"
              />
            </div>
            <div className="row">
              <button className="signupBtn btn" onClick={onSignUpHandler}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    OnSignUpHandler: (user) => dispatch(actions.signUpUser(user)),
  };
};
export default connect(null, mapDispatchToProps)(SignUp);

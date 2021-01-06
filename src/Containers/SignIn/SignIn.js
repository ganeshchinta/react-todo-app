import { useState } from "react";
import { connect } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import * as actions from "../../store/actions/user";
import "./SignIn.css";

function SignIn(props) {
  const [emailId, setemailId] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChanged = (event) => {
    if (!event.target.value) return;
    setemailId(event.target.value);
  };

  const onPasswordChanged = (event) => {
    if (!event.target.value) return;
    setPassword(event.target.value);
  };

  const onSignIn = () => {
    if (emailId === "" || password === "") return;
    props.OnSignHandler(emailId);
    props.history.push("/home");
  };

  return (
    <section className="main2">
      <div className="loginContainer">
        <h2 className="h2">Login</h2>
        <div className="row">
          <FaUserAlt className="icons" />
          <input
            type="text"
            name="Username"
            value={emailId}
            onChange={onEmailChanged}
            placeholder="Enter your email"
          />
        </div>
        <div className="row">
          <RiLockPasswordFill className="icons" />
          <input
            type="password"
            name="Password"
            value={password}
            onChange={onPasswordChanged}
            placeholder="Enter your password"
          />
        </div>
        <div className="row login">
          <button className="loginBtn button" onClick={onSignIn}>
            Sign In
          </button>
          <button
            className="createAccount button"
            onClick={() => props.history.push("/sign-up")}
          >
            Create account
          </button>
        </div>
      </div>
    </section>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    OnSignHandler: (user) => dispatch(actions.signInUser(user)),
  };
};
export default connect(null, mapDispatchToProps)(SignIn);

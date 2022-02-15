import "./register.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

import { Link } from "react-router-dom";
function Register() {
  return (
    <>
      <Topbar />
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Username</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter Your Username"
          />
          <label>Email</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter Your Email"
          />
          <label>Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="loginBtn">Register</button>
        </form>
        <button className="registerLoginBtn">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
        {/* <Sidebar /> */}
      </div>
    </>
  );
}

export default Register;

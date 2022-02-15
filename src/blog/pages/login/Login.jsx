import "./login.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <Topbar />

      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Enter Your Email"
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="loginBtn">Login</button>
        </form>
        <button className="registerBtn">
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
        {/* <Sidebar /> */}
      </div>
    </>
  );
}

export default Login;

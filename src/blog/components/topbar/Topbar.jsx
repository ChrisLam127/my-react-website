import "./topbar.css";
import profile from "../images/p2.jpg";
import { Link } from "react-router-dom";

function Topbar() {
  const user = false;

  return (
    <div className="top">
      <div className="topLeft">
        <Link to="/" className="logo">
          <h1>
            <span>L</span>ambo <span>D</span>igital
          </h1>
        </Link>
        {/* <i class="fab fa-facebook-square topIcon"></i>
        <i class="fab fa-twitter-square topIcon"></i>
        <i class="fab fa-instagram-square topIcon"></i>
        <i class="fab fa-pinterest-square topIcon"></i>
        <i class="fab fa-youtube-square topIcon"></i> */}
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/homeBlog">
              BLOG
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src={profile} alt="" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i class="fas fa-search searchIcon"></i>
      </div>
    </div>
  );
}

export default Topbar;

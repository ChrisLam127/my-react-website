import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <i className="fab fa-slack"></i>
            <span className="logo_name">LD</span>
          </div>
          <div className="media-icons">
            <Link to="/">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
        </div>

        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Lambo Digital</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/webdesign">About Us</Link>
            </li>
            <li>
              <Link to="/">Get Started</Link>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Services</li>
            <li>
              <Link to="/">App design</Link>
            </li>
            <li>
              <Link to="/">Web Design</Link>
            </li>
            <li>
              <Link to="/">Graphic Design</Link>
            </li>
            <li>
              <Link to="/">Media Marketing</Link>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Account</li>
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <Link to="/">My Account</Link>
            </li>
            <li>
              <Link to="/">Preferences</Link>
            </li>
            <li>
              <Link to="/">Purchase</Link>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Technologies</li>
            <li>
              <Link to="/">HTML & CSS</Link>
            </li>
            <li>
              <Link to="/">JavaScript</Link>
            </li>
            <li>
              <Link to="/">Node.js</Link>
            </li>
            <li>
              <Link to="/">React.js</Link>
            </li>
            <li>
              <Link to="/">Wordpress</Link>
            </li>
            <li>
              <Link to="/">Shopify</Link>
            </li>
            <li>
              <Link to="/">contenful</Link>
            </li>
          </ul>
          <ul class="box input-box">
            <li class="link_name">Subscribe</li>
            <li>
              <input type="text" placeholder="Enter Your Email" />
            </li>
            <li>
              <input type="button" value="subscribe" />
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            Copyright &copy; 2021 <Link to="">Lambo Digital</Link> All rights
            reserved
          </span>
          <span className="policy_terms">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms and Conditions</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

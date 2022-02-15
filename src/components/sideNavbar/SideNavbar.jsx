import "./sideNavbar.css";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div className="home-right">
      <div className="btns">
        <Link to="/contact" className="quote">
          <i className="fas fa-star"></i> GET A QUOTE
        </Link>
      </div>
      <div className="btns">
        <Link to="https://www.seobility.net" className="free">
          GET A FREE SEO AUDIT
        </Link>
      </div>
      <div className="homeSubmenu">
        <ul>
          <li>
            <Link to="/webDesign">Web Design </Link>
          </li>
          <li>
            <Link to="/maintenance">Website Maintenance</Link>
          </li>
          <li>
            <Link to="/webDesign">Web Design Services</Link>
          </li>
          <li>
            <Link to="/socialMediaAd">Social Media Marketing</Link>
          </li>
          <li>
            <Link to="/webDesign">Website Redesign</Link>
          </li>
          <li>
            <Link to="/packages">Web Package Combination Deals</Link>
          </li>
          <li>
            <Link to="/webDesign">WordPress Website Design </Link>
          </li>
          <li>
            <Link to="/webDesign">Shopify Website Design </Link>
          </li>
          <li>
            <Link to="/contact">Website Support</Link>
          </li>
          <li>
            <Link to="/hosting">Website Hosting</Link>
          </li>
          <li>
            <Link to="/domain">Website Domain Registration</Link>
          </li>
          <li>
            <Link to="/googleAd">Google Advertisement</Link>
          </li>
          <li>
            <Link to="/consulting">Business Consulting</Link>
          </li>
          <li>
            <Link to="/SEO">SEO</Link>
          </li>
          <li>
            <Link to="/tediousOfficeTask">Tedious Office Work</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;

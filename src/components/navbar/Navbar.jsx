import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import linksData from "./data";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="logo">
            <h1>
              <span>L</span>ambo <span>D</span>igital
            </h1>
          </Link>
          <button className="nav-toggle" onClick={toggleLinks}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {linksData.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url} className="link">
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navBtn">
          <Link to="/register" className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    return setShow(!show);
  };
  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/post">Posts</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
      <div className="search">
        {show && <input type="text" placeholder="Search" />}
        <i class="fas fa-search" onClick={handleToggle}></i>
      </div>
    </div>
  );
}

export default Navbar;

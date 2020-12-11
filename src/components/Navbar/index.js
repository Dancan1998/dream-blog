import React, { useState } from "react";
import "./style.css";
function Navbar() {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    return setShow(!show);
  };
  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Posts</a>
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

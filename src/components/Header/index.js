import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Header() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    return setToggle(!toggle);
  };
  return (
    <section className="header-container">
      <div className="menu-icon" onClick={handleToggle}>
        <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <header className={toggle ? "header active" : "header"}>
        <nav className="headerMenu">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/post">Posts</Link>
          <Link to="/contactus">Contact Us</Link>
        </nav>
        <div className="socialMedia">
          <a href="#" className="margiN">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="margiN">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" className="margiN">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </header>
    </section>
  );
}

export default Header;

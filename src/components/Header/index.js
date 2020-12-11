import React, { useState } from "react";
import "./style.css";

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
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Contact Us</a>
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

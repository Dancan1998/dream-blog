import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
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
  );
}

export default Header;

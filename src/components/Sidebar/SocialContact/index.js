import React from "react";
import Card from "../../UI/Card";
import "./style.css";
function SocialContact() {
  return (
    <Card>
      <div className="contact">
        <h3>Social contact</h3>
        <div className="icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </Card>
  );
}

export default SocialContact;

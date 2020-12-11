import React from "react";
import Card from "../../UI/Card";
// import image from "../../../cat-post-3.jpg";
import "./style.css";
function CardItem() {
  return (
    <Card>
      <div className="title">
        <h3>about us</h3>
      </div>
      <div className="img-container">
        <img src="./cat-post-3.jpg" alt="" />
        <div className="aboutText">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            itaque! Dignissimos, in. Quo dignissimos ab vitae alias quos
            perferendis ratione?
          </p>
        </div>
      </div>
    </Card>
  );
}

export default CardItem;

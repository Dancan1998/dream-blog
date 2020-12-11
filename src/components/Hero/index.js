import React from "react";
import Logo from "../Logo";
import Navbar from "../Navbar";
import Card from "../UI/Card";
import "./style.css";

function Hero() {
  return (
    <section className="hero">
      <Card>
        <div style={{ padding: "5rem 0rem" }}>
          <Logo />
        </div>
        <Navbar />
      </Card>
    </section>
  );
}

export default Hero;

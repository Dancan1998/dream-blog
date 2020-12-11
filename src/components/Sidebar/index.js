import React from "react";
import Card from "../UI/Card";
import CardItem from "./CardItem";
import RecentPost from "./RecentPost";
import SocialContact from "./SocialContact";
import "./style.css";
function SideBar() {
  return (
    <div className="sidebar">
      <CardItem />
      <SocialContact />
      <RecentPost />
    </div>
  );
}

export default SideBar;

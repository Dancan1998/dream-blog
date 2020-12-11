import React, { useState } from "react";
import "./style.css";
import BlogPost from "../../components/BlogPost";
import SideBar from "../../components/Sidebar";
function Post() {
  return (
    <section className="container">
      <BlogPost />
      <SideBar />
    </section>
  );
}

export default Post;

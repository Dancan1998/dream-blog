import React, { useState } from "react";
import "./style.css";
import Card from "../UI/Card/index";
import { data } from "../data";
import SinglePost from "../SinglePost";
function BlogPost() {
  const [posts, setPosts] = useState(data);
  console.log(posts);
  return (
    <div className="blogPost">
      {posts.map((post) => {
        return <SinglePost key={post.id} post={post} />;
      })}
    </div>
  );
}

export default BlogPost;

import React, { useState } from "react";
import Card from "../../UI/Card";
import SingleRecentPost from "./SingleRecentPost";
import "./style.css";
import { data } from "../../data";
function RecentPost() {
  const [posts, setPosts] = useState(data);
  return (
    <Card>
      <div className="recentTitle">
        <h3>Recent post</h3>
      </div>
      <div className="recentPosts">
        {posts.map((post) => {
          return <SingleRecentPost key={post.id} post={post} />;
        })}
      </div>
    </Card>
  );
}

export default RecentPost;

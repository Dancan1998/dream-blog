import React from "react";
import "./style.css";
function SingleRecentPost(props) {
  const { blogtitle, postedOn } = props.post;
  return (
    <div className="recentText">
      <h4>
        <a href="#">{blogtitle}</a>
      </h4>
      <p className="recentHidden">
        <i class="far fa-clock"></i>
        <span>{postedOn}</span>
      </p>
      <hr />
    </div>
  );
}

export default SingleRecentPost;

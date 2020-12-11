import React from "react";
import Card from "../UI/Card/index";
function SinglePost(props) {
  const {
    blogImage,
    blogText,
    blogCategory,
    blogTitle,
    postedOn,
    author,
  } = props.post;
  console.log(author);
  return (
    <div>
      <Card>
        <img src={blogImage} alt="image" style={{}} className="image" />
        <div className="title">
          <h5>{blogCategory}</h5>
          <h2>{blogTitle}</h2>
          <p>
            posted on <span>{postedOn}</span> by {author}
          </p>
        </div>
        <div className="text">
          <p>{blogText}</p>
        </div>
        <div className="btn">
          <button>
            <a href="#">Read More</a>
          </button>
        </div>
      </Card>
    </div>
  );
}

export default SinglePost;

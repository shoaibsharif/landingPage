import React from "react";

const SingleBlog = ({ date, title, description }) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="single-blog-item">
        <h6 className="post-date">{date}</h6>
        <h4 className="post-title">
          <a href="#">{title}</a>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleBlog;

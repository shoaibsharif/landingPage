import React from "react";
import SingleBlog from "./SingleBlog";

const Blogs = ({ blogs }) => {
  return (
    <div className="blog-sec section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto text-center">
            {/* blog title section */}
            <div className="blog-title-section mb-60">
              <div className="blog-title">
                <h2>FROM OUR BLOG</h2>
              </div>
              <p>
                Are you looking for topical insights and tips about recruitment?
                You'll find it in our blog. We speak about what's trending in
                recruitment and share our advice on how to hire the best
                candidates
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs.map(({ title, description, date }, index) => (
            <SingleBlog
              title={title}
              date={date}
              key={index}
              description={description}
            />
          ))}
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto text-center">
            <div className="read-more">
              <a href="#">Read the blog</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

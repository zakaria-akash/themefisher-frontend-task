import React from "react";

import classes from "./blog-component.module.scss";
import BlogCard from "../layout/blog-card";
import { BlogPostsData } from "@/store/blog-posts-data";

const BlogComponent = () => {
  return (
    <div className="row w-100">
      <div className="col-md-4"></div>
      <div className={`col-md-8 ${classes.blogSection}`}>
        <div className="row">
          <div className={`col-md-12 ${classes.blogTitleCol}`}>
            <p className={classes.blogTitle}>Blog</p>
          </div>
          {/* Separate component */}
          {BlogPostsData &&
            BlogPostsData.map((blog) => (
              <BlogCard
                key={blog.id}
                blogImage={blog.blogImage}
                blogAlt={blog.blogAlt}
                blogDate={blog.blogDate}
                blogTitle={blog.blogTitle}
                blogDescription={blog.blogDescription}
                blogAuthor={blog.blogAuthor}
              />
            ))}
          {/* Separate component */}
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;

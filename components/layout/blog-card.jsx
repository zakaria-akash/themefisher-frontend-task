import React from "react";

import { Img } from "react-image";

import classes from "./blog-card.module.scss";

const BlogCard = ({
  blogImage,
  blogAlt,
  blogDate,
  blogTitle,
  blogDescription,
  blogAuthor,
}) => {
  return (
    <div className={`col-md-6 ${classes.blogCardCol}`}>
      <div className={classes.blogCardComponent}>
        <div className={classes.blogCardImageDiv}>
          <Img
            className={`img-fluid ${classes.blogCardImage}`}
            alt={blogAlt}
            src={blogImage}
          />
        </div>
        <div className={classes.blogCardTextDiv}>
          <p className={classes.dateInfo}>{blogDate}</p>
          <p className={classes.title}>{blogTitle}</p>
          <p className={classes.description}>{blogDescription}</p>
          <div className={classes.authorTitleContainer}>
            <p className={classes.authorTitle}>{blogAuthor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

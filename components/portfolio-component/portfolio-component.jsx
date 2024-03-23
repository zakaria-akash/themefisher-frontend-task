import React from "react";

import { Img } from "react-image";

import classes from "./portfolio-component.module.scss";

const PortfolioComponent = () => {
  return (
    <div className="row w-100">
      <div className="col-md-4"></div>
      <div className={`col-md-8 ${classes.portfolioSection}`}>
        <div className="row">
          <div className={`col-md-12 ${classes.portfolioTitleCol}`}>
            <p className={classes.portfolioTitle}>Portfolio</p>
          </div>
        </div>

        <div className="row">
          <div className={`col-md-12 ${classes.portfolioHeader}`}>
            <p className={classes.portfolioHeaderText}>All</p>
            <p className={classes.portfolioHeaderText}>Graphic Design</p>
            <p className={classes.portfolioHeaderText}>Mobile App</p>
            <p className={classes.portfolioHeaderText}>Photography</p>
            <p className={classes.portfolioHeaderText}>UI/UX Design</p>
          </div>
        </div>
        <div className="row my-2">
          <div className={`col-md-6 ${classes.portfolioItem} my-2 px-1`}>
            <Img
              className={`img-fluid ${classes.portfolioItemImage}`}
              alt="portfolio-item-image"
              src="/images/portfolioImages/portfolioImage1.png"
            />
          </div>
          <div className={`col-md-6 ${classes.portfolioItem} my-2 px-1`}>
            <Img
              className={`img-fluid ${classes.portfolioItemImage}`}
              alt="portfolio-item-image"
              src="/images/portfolioImages/portfolioImage4.png"
            />
          </div>
          <div className={`col-md-6 ${classes.portfolioItem} my-2 px-1`}>
            <Img
              className={`img-fluid ${classes.portfolioItemImage}`}
              alt="portfolio-item-image"
              src="/images/portfolioImages/portfolioImage3.png"
            />
          </div>
          <div className={`col-md-6 ${classes.portfolioItem} my-2 px-1`}>
            <Img
              className={`img-fluid ${classes.portfolioItemImage}`}
              alt="portfolio-item-image"
              src="/images/portfolioImages/portfolioImage2.png"
            />
          </div>
          <div
            className={`col-md-6 ${classes.portfolioItemBlack} my-2 me-2 px-1`}
          >
            <div className={`iconDiv`}>
              <Img
                className={`img-fluid ${classes.portfolioIcon}`}
                alt="portfolio-icon"
                src="/images/icons/portfolioIcon.png"
              />
            </div>
            <div className={classes.textDiv}>
              <p className={classes.title}>Website design</p>
              <p className={classes.subTitle}>Fitness Studio Website</p>
            </div>
          </div>
          <div
            className={`col-md-6 ${classes.portfolioItemBlack} ms-2 my-2 px-1`}
          >
            <div className={classes.iconDiv}>
              <Img
                className={`img-fluid ${classes.portfolioIcon}`}
                alt="portfolio-icon"
                src="/images/icons/portfolioIcon.png"
              />
            </div>
            <div className={classes.textDiv}>
              <p className={classes.title}>Photography</p>
              <p className={classes.subTitle}>Photography Project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;

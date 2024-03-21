import React from "react";
import { Img } from "react-image";

import classes from "./profile-overview.module.scss";

const ProfileOverview = () => {
  return (
    <div className={`row w-100 ${classes.profileOverviewDiv}`}>
      <div className={`col-md-4 ${classes.profileImageDiv}`}>
        <div className={classes.leftBgIconDiv}>
          <Img
            className={`img-fluid ${classes.leftBgIcon}`}
            alt="left-background-icon"
            src="/images/icons/bg_icon_left.png"
          />
        </div>
        <div className={classes.profileIconsDiv}>
          <Img
            className={`img-fluid ${classes.homeLightIcon}`}
            alt="home-light-icon"
            src="/images/icons/home_light.png"
          />
          <Img
            className={`img-fluid ${classes.profileLightIcon}`}
            alt="prfile-light-icon"
            src="/images/icons/profile_about_light.png"
          />
          <Img
            className={`img-fluid ${classes.portfolioLightIcon}`}
            alt="portfolio-light-icon"
            src="/images/icons/portfolio_light.png"
          />
          <Img
            className={`img-fluid ${classes.blogLightIcon}`}
            alt="blog-light-icon"
            src="/images/icons/blog_light.png"
          />
          <Img
            className={`img-fluid ${classes.contactLightIcon}`}
            alt="contact-light-icon"
            src="/images/icons/contact_light.png"
          />
        </div>
        <div className={classes.profilePhotoDiv}>
          <div className={classes.profilePhotoContainer}>
            <Img
              className={`img-fluid ${classes.profilePicture}`}
              alt="prfile-picture-icon"
              src="/images/profile_picture.png"
            />
          </div>
          <div className={classes.socialMediaIcons}>
            <div className={classes.socialMediaIcon}>
              <Img
                className={`img-fluid ${classes.fb_icon}`}
                alt="fb-icon"
                src="/images/icons/sm_icons/facebook.png"
              />
            </div>
            <div className={classes.socialMediaIcon}>
              <Img
                className={`img-fluid ${classes.linkedin_icon}`}
                alt="linkedin-icon"
                src="/images/icons/sm_icons/linkedin_in.png"
              />
            </div>
            <div className={classes.socialMediaIcon}>
              <Img
                className={`img-fluid ${classes.pinterest_icon}`}
                alt="pinterest-icon"
                src="/images/icons/sm_icons/pinterest.png"
              />
            </div>
            <div className={classes.socialMediaIcon}>
              <Img
                className={`img-fluid ${classes.instagram_icon}`}
                alt="instagram-icon"
                src="/images/icons/sm_icons/instagram.png"
              />
            </div>
            <div className={classes.socialMediaIcon}>
              <Img
                className={`img-fluid ${classes.twitter_icon}`}
                alt="twitter-icon"
                src="/images/icons/sm_icons/twitter.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`col-md-8 ${classes.profileInfoDiv}`}>
        <div className={classes.rightBgIconDiv}>
          <Img
            className={`img-fluid ${classes.rightBgIcon}`}
            alt="left-background-icon"
            src="/images/icons/bg_icon_right.png"
          />
        </div>
        <div className={classes.profileInfoTextDiv}>
          <p className={classes.introTitle}>INTRODUCTION</p>
          <p className={classes.mainTitle}>
            I am a Creative Developer & UI/UX Design Expert
          </p>
          <p className={classes.subTitle}>24 years/Robert Smith/UK London</p>
          <p className={classes.infoText}>
            Prolific, full stack web developer with a passion for metrics and
            beating former best-yets. Prototyped 25 new product features per
            year for Flexor, Inc. Decreased rework by 22% and costs by 15%.
            Consistently receive high user experience scores for all web
            development projects, including a 55% increase for Flexor, Inc.
            Passionate about building world class web applications. One of my
            sites received a 2020 Webby for Best Navigation and Structure.
          </p>
          <div className={classes.downloadCVBtn}>
            <p className={classes.btnText}>Download CV</p>
            <Img
              alt="download-button-icon"
              src="/images/icons/download_cv.png"
              className={`img-fluid ${classes.download_btn_icon}`}
            />
          </div>
        </div>
        <div className={classes.profileInfoIconDiv}>
          <div className={classes.copyrightTextDiv}>
            <p className={classes.copyrightText}>
              © design by themefisher developed by gethugothemes
            </p>
          </div>
          <div className={classes.FR_Icon}>
            <Img
              className={`img-fluid ${classes.fr_icon}`}
              alt="fb-icon"
              src="/images/icons/french.png"
            />
          </div>
          <div className={classes.EN_Icon}>
            <Img
              className={`img-fluid en_icon`}
              alt="fb-icon"
              src="/images/icons/english.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;

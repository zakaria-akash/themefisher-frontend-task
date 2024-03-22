import React from "react";
import { Img } from "react-image";

import classes from "./resume-info-card.module.scss";

const ResumeInfoCard = ({ id, yearRange, title, subTitle, description }) => {
  return (
    <div key={id} className={classes.timeFrameElement}>
      <div className={classes.timeRangeDiv}>
        <div className={classes.timeRangeIconDiv}>
          <Img
            className={`${classes.timeRangeIcon} img-fluid`}
            alt="time-range-icon"
            src="/images/icons/time_range_icon.png"
          />
        </div>
        <div className={classes.timeRangeTimeDiv}>
          <p className={classes.timeRangeTime}>{yearRange}</p>
        </div>
      </div>
      <div className={classes.timeFrameTextDiv}>
        <div className={classes.title}>{title}</div>
        <div className={classes.subTitle}>{subTitle}</div>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  );
};

export default ResumeInfoCard;

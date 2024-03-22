import React from "react";

import classes from "./skill-bar.module.scss";

const SkillBar = ({ skillTitle, skillScore }) => {
  return (
    <div className={`row`}>
      <div className={`col-md-12 ${classes.skillContainer}`}>
        <div className={classes.skillTitleDiv}>
          <p className={classes.skillTitle}>{skillTitle}</p>
          <p className={classes.skillScore}>{skillScore}</p>
        </div>
        <div className={classes.skillBarContainer}>
          <div className={classes.skills} style={{ width: skillScore }}></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;

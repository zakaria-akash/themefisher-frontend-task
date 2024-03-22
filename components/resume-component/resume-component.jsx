import { ResumeData } from "@/store/resume-data";
import React, { Fragment } from "react";
import { Img } from "react-image";
import ResumeInfoCard from "../layout/resume-info-card";

import classes from "./resume-component.module.scss";

const ResumeComponent = () => {
  return (
    <div className="row w-100">
      <div className="col-md-4"></div>
      <div className={`col-md-8 ${classes.resumeSection}`}>
        <div className="row">
          <div className="col-md-12">
            <p className={classes.sectionTitle}>Resume</p>
          </div>
        </div>

        {ResumeData &&
          ResumeData.map((resumeItem) => (
            <div key={resumeItem.id}>
              <div className="row">
                <div className={`col-md-12 ${classes.resumeSubtitleSection}`}>
                  <div className={classes.subtitleIconDiv}>
                    <Img
                      className={`${classes.subtitleIcon} img-fluid`}
                      alt={resumeItem.alt}
                      src={resumeItem.icon}
                    />
                  </div>
                  <p className={classes.subtitleText}>{resumeItem.title}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className={classes.timeFrameSection}>
                    <div className={classes.doubleVerticalLine}></div>
                    {/* New Coponent */}
                    {resumeItem.data &&
                      resumeItem.data.map((item) => (
                        <ResumeInfoCard
                          key={item.id}
                          id={item.id}
                          yearRange={item.yearRange}
                          title={item.title}
                          subTitle={item.subTitle}
                          description={item.description}
                        />
                      ))}

                    {/* New Coponent */}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ResumeComponent;

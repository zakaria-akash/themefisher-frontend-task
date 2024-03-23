import React from "react";

import classes from "./package-card.module.scss";

const PackageCard = ({ id, packageType, packageRate, packageServices }) => {
  return (
    <div className={`col-md-6 ${classes.pricingCardCol}`}>
      <div className={classes.pricingCardComponent}>
        <div className={classes.packageType}>
          <p className={classes.packageTypeText}>{packageType}</p>
        </div>
        <div className={classes.packageRate}>
          <p className={classes.rateAmount}>{packageRate}</p>
          <p className={classes.rateTime}>/month</p>
        </div>

        <div className={classes.packageServices}>
          {packageServices &&
            packageServices.map((service) => (
              <p
                key={service.id}
                className={`${classes.packageService} ${
                  service.active ? "" : "inactiveService"
                }`}
              >
                {service.service}
              </p>
            ))}
        </div>
        <div
          className={`${classes.getStartedBtn} ${
            id === 1 ? "highlightedGetStartedBtn" : ""
          }`}
        >
          <p className={classes.getStartedBtnText}>Get Started</p>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;

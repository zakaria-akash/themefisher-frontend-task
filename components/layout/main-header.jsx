import React from "react";
import { Img } from "react-image";

import classess from "./main-header.module.scss";

const MainHeader = () => {
  return (
    <div className={`row ${classess.headRow}`}>
      <div className={`col-md-4 ${classess.titleBar}`}>
        <p className={classess.fullName}>Daryl Smith</p>
        <p className={classess.fullTitle}>UI/UX designer</p>
      </div>
      <div className={`col-md-8 ${classess.headBtnBar}`}>
        <div className={`${classess.homeBtnDiv} btn`}>
          <Img
            className={`img-fluid ${classess.homeBtnIcon}`}
            alt="home-button-icon"
            src="/images/icons/home_btn_icon.png"
          />
          <p className={`my-auto ${classess.headerBtnTitle}`}>Home</p>
        </div>
        <p className={`btn ${classess.talkToMeBtnDiv}`}>Talk to Me</p>
      </div>
    </div>
  );
};

export default MainHeader;

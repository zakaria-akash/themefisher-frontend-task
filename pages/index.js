import MainHeader from '@/components/layout/main-header';
import ProfileOverview from '@/components/profile-overview/profile-overview';
import React, { Fragment } from 'react';
import { Img } from "react-image";

const HomePage = () => {
  return (

    <Fragment>
      <p className="main-title">Home</p>

      <div className="mainContainer container-fluid p-0">
        <MainHeader />

        <ProfileOverview />
      </div>
    </Fragment>
  );
};

export default HomePage;
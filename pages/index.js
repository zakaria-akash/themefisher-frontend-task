import BlogComponent from '@/components/blog-component/blog-component';
import MainHeader from '@/components/layout/main-header';
import PricingPackagesComponent from '@/components/pricing-packages-component/pricing-packages-component';
import ProfileOverview from '@/components/profile-overview/profile-overview';
import ResumeComponent from '@/components/resume-component/resume-component';
import SkillsComponent from '@/components/skills-component/skills-component';
import React, { Fragment } from 'react';
import { Img } from "react-image";

const HomePage = () => {
  return (

    <Fragment>
      <div className="mainContainer container-fluid p-0">
        <p className="main-title">Home</p>
        <MainHeader />
        <ProfileOverview />
        <ResumeComponent />
        <SkillsComponent />
        <BlogComponent />
        <PricingPackagesComponent />

      </div>
    </Fragment>
  );
};

export default HomePage;
import MainHeader from '@/components/layout/main-header';
import React from 'react';

const HomePage = () => {
  return (
    <div className="container-fluid px-5 py-0">
      <div className="row px-5 pt-4 pb-0">
        <p className="main-title">Home</p>
      </div>

      <div className="mainContainer p-0">
        <MainHeader />
      </div>
    </div>
  );
};

export default HomePage;
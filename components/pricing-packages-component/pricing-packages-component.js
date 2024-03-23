import React from 'react';

import classes from "./pricing-packages-component.module.scss";
import PackageCard from '../layout/package-card';
import { PricingPackageData } from '@/store/pricing-packages-data';

const PricingPackagesComponent = () => {
  return (
    <div className="row w-100">
      <div className="col-md-4"></div>
      <div className={`col-md-8 ${classes.pricingSection}`}>
        <div className="row">
          <div className={`col-md-12 ${classes.pricingTitleCol}`}>
            <p className={classes.pricingTitle}>Pricing</p>
          </div>
          {/* Separate component */}
          {PricingPackageData && PricingPackageData.map((packageItem) => <PackageCard key={packageItem.id} id={packageItem.id} packageType={packageItem.packageType} packageRate={packageItem.packageRate} packageServices={packageItem.packageServices} />)}
          {/* Separate component */}
        </div>
      </div>
    </div>
  );
};

export default PricingPackagesComponent;
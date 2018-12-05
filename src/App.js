import React from 'react';
import './App.css';

import MobileBookshelf from './components/MobileBookshelf';
import DesktopBookshelf from './components/DesktopBookshelf';

import withMobileDetection from './hocs/withMobileDetection';

function App({ isMobile }) {
  return (
    <React.Fragment>
      {isMobile ? <MobileBookshelf /> : <DesktopBookshelf />}
    </React.Fragment>
  );
}

//отдали HOC'у withMobileDetection определение мобильная версия или нет
export default withMobileDetection(App);

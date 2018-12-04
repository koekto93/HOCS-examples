import React from 'react';

import getDisplayName from '../helper/getDisplayName';

//ф-я определяет мобилка или нет
const detectMobile = () => {
  const mobile = ['iphone', 'ipad', 'android'];
  const ua = navigator.userAgent.toLowerCase();
  for (let value of mobile) {
    if (ua.includes(value)) {
      return true;
    }
  }
  return false;
};

//ф-я, которая возвращает новый функциональный компонент с доп props
export default function withMobileDetection(Component) {
  function WithMobileDetection(props) {
    return <Component {...props} isMobile={detectMobile()} />;
  }

  //displayName - это то, как отображается имя компонента в react dev tools
  WithMobileDetection.displayName = `withMobileDetection(${getDisplayName(
    Component,
  )})`;

  return WithMobileDetection;
}

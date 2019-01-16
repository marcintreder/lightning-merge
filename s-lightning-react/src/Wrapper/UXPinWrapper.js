import React from 'react';
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
//import '@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg';

export default function UXPinWrapper({ children }) {
  return <IconSettings standardSprite="https://svgshare.com/i/AaK.svg">{children}</IconSettings>;
}

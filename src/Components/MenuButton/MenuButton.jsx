import React from 'react';
import MenuButtonStyles from './MenuButton.module.css';

/* This Component take to props:
    1)onClickOpenMenu - this is a function for change second property
    2)isMenuClickOpen - this is a toggle for change a styles
*/

export const MenuButton = (props) => {
  return (
    <div onClick = {props.onClickOpenMenu} className = {MenuButtonStyles.burgerWrapper}>
      <div className = {props.isMenuClickOpen ? MenuButtonStyles.burger + " " + MenuButtonStyles.burgerClose : MenuButtonStyles.burger}></div>
    </div>
  );
}

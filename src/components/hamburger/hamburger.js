import React from 'react';
import { container, hamburger, openBar1, openBar2, openBar3 } from './hamburger.module.css';

const Hamburger = props => {
  const { isOpen, toggleMenu } = props;

  const startToggleMenu = e => {
    if (e.currentTarget.className === container) {
      toggleMenu();
    }
  }

  return (
    <div className={container} onClick={startToggleMenu}>
      <div className={hamburger}>
        <div className={isOpen ? openBar1 : null}></div>
        <div className={isOpen ? openBar2 : null}></div>
        <div className={isOpen ? openBar3 : null}></div>
      </div>
    </div>
  );
}

export default Hamburger;
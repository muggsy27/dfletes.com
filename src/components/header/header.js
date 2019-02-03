import React from 'react';
import { container } from './header.module.css';

const Header = ({ title, subtitle }) => (
  <div className={container}>
    {title && <h1>{title}</h1>}
    {subtitle && <h3>{subtitle}</h3>}
  </div>
);

export default Header;
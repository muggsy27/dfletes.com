import React from 'react';
import { container } from './sub-header.module.css';

const SubHeader = ({ title, subtitle }) => (
  <div className={container}>
    <h3>{title}</h3>
    <p>{subtitle}</p>
  </div>
);

export default SubHeader;
import React from 'react';
import { container } from './big-button.module.css';

const BigButton = ({ url, title }) => (
  <div className={container}>
    <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
  </div>
);

export default BigButton;
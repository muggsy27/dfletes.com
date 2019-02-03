import React from 'react';
import { container } from './card.module.css';

const Card = ({ children }) => (
  <div className={container}>
    {children}
  </div>
);

export default Card;
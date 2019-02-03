import React from 'react';
import { container } from './featured-image.module.css';

const FeaturedImage = ({ image, children }) => (
  <div className={container}>
    {image && <img src={image} alt="" />}
    {children}
  </div>
);

export default FeaturedImage;
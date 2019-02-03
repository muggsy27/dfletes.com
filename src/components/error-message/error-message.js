import React from 'react';
import { container } from './error-message.module.css';

const ErrorMessage = () => (
  <div className={container}>
    <p>No posts match your search...</p>
  </div>
);

export default ErrorMessage;
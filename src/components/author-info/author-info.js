import React from 'react';
import avatar from '../../images/avatar.png';
import { container } from './author-info.module.css';

/* 
- edge is a destructured graphql object passed from the blog-card component 
- the edge object created from graphql data queries
*/
const AuthorInfo = ({ author, timeToRead, children }) => (
  <div className={container}>
    <img src={avatar} alt="avatar" />
    <p>{author}<br />{timeToRead} Minute Read</p>
    {children}
  </div>
);

export default AuthorInfo;
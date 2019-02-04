import React from 'react';
import Link from 'gatsby-link';
import avatar from '../../images/avatar.png';
import { container, link } from './blog-header.module.css';

const BlogHeader = ({ title, date, author, tags }) => (
  <div className={container}>
    <h1>{title}</h1>
    <img src={avatar} alt="avatar" />
    <p>Posted {date} by {author}</p>
    <div>
      {tags.map(tag => <Link to={`/tags/${tag}`} className={link}>{tag}</Link>)}
    </div>
  </div>
);

export default BlogHeader;
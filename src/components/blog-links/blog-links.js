import React from 'react';
import { Link } from 'gatsby';
import { container, link } from './blog-links.module.css';

const BlogLinks = ({ prev, next }) => (
  <div className={container}>
    {prev ? <Link to={prev} className={link}>← Previous Post</Link> : <div></div>}
    {next ? <Link to={next} className={link}>Next Post →</Link> : <div></div>}
  </div>
);

export default BlogLinks;
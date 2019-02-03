import React from 'react';
import { container } from './blog-post.module.css';

const BlogPost = ({ html }) => (
  <div className={container} dangerouslySetInnerHTML={{ __html: html }}>
  </div>
);

export default BlogPost;
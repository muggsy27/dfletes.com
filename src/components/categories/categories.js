import React from 'react';
import { Link } from 'gatsby';
import { list, link } from './categories.module.css';

const Categories = () => (
  <ul className={list}>
    <Link className={link} to="/tags/reactjs/">
      <li>ReactJS</li>
    </Link>
    <Link className={link} to="/tags/databases">
      <li>Databases</li>
    </Link>
    <Link className={link} to="/tags/js-libraries">
      <li>JS Libraries</li>
    </Link>
    <Link className={link} to="/tags/css">
      <li>CSS</li>
    </Link>
  </ul>
);

export default Categories;
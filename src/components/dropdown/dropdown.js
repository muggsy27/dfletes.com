import React from 'react';
import { Link } from 'gatsby';
import { openDropdown, closedDropdown, link, buttonLink } from './dropdown.module.css';

const Dropdown = ({ isOpen }) => (
  <div className={isOpen ? openDropdown : closedDropdown}>
    <ul>
      <li><Link to="#" className={link}>/about-me</Link></li>
      <li><Link to="/blog" className={link}>/blog</Link></li>
      <li><Link to="/tags/reactjs" className={link}>/blog/tags/reactjs</Link></li>
      <li><Link to="/tags/databases" className={link}>/blog/tags/databases</Link></li>
      <li><Link to="/tags/js-libraries" className={link}>/blog/tags/js-libraries</Link></li>
      <li><Link to="/tags/css" className={link}>/blog/tags/css</Link></li>
      <li><Link to="/contact" className={buttonLink}>Contact</Link></li>
    </ul>
  </div>
);

export default Dropdown;
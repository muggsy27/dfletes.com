import React from 'react';
import githubLogo from '../../images/github.svg';
import sketchLogo from '../../images/sketch.svg';
import wordLogo from '../../images/word.svg';
import pdfLogo from '../../images/pdf.svg';
import { container, tagsContainer } from './description.module.css';

const Description = ({ title, date, description, tags, github, sketch, word, pdf, link, children }) => (
  <div className={container}>
    {title && <h2>{title}</h2>}
    {date && <p>{date}</p>}
    {description && <p>{description}</p>}
    {tags && <div className={tagsContainer}>{tags.map(tag => <span>{tag}</span>)}</div>}
    {link &&
      <div>
        {github && <img src={githubLogo} alt="github profile icon" />}
        {sketch && <img src={sketchLogo} alt="sketch logo" />}
        {word && <img src={wordLogo} alt="microsoft word logo" />}
        {pdf && <img src={pdfLogo} alt="pdf logo" />}
        <a href={link}>{sketch ? link.substr(1) : link}</a>
      </div>}
    {children}
  </div>
);

export default Description;
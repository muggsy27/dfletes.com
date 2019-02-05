import React from 'react';
import githubLogo from '../../images/github.svg';
import sketchLogo from '../../images/sketch.svg';
import wordLogo from '../../images/word.svg';
import pdfLogo from '../../images/pdf.svg';
import { container, tagsContainer } from './description.module.css';

const Description = ({ title, date, description, tags, github, githubLink, sketch, word, pdf, link, children }) => (
  <div className={container}>
    {title && <h2>{title}</h2>}
    {date && <p>{date}</p>}
    {description && <p>{description}</p>}
    {tags && <div className={tagsContainer}>{tags.map(tag => <span>{tag}</span>)}</div>}
    {link &&
      <div>
        {github && <a href={githubLink} target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="github profile icon" /></a>}
        {sketch && <img src={sketchLogo} alt="sketch logo" />}
        {word && <img src={wordLogo} alt="microsoft word logo" />}
        {pdf && <img src={pdfLogo} alt="pdf logo" />}
        <a href={link} target="_blank" rel="noopener noreferrer">{sketch ? link.substr(1) : githubLink ? 'Project URL' : link}</a>
      </div>}
    {children}
  </div>
);

export default Description;
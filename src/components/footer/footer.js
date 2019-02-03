import React from 'react';
import github from '../../images/github.svg';
import angellist from '../../images/angellist.svg';
import linkedin from '../../images/linkedin.svg';
import gatsby from '../../images/gatsby.svg';
import { container } from './footer.module.css';

const Footer = () => (
  <footer>
    <div className={container}>
      <div></div>
      <div>
        <p>Made With</p>
        <img src={gatsby} alt="gatsbyjs logo" />
      </div>
      <div>
        <a
          href="https://github.com/muggsy27"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={github}
            alt="github logo"
          />
        </a>
        <a
          href="https://angel.co/derek-fletes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={angellist}
            alt="angel list logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/derekfletes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            alt="linkedin logo"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
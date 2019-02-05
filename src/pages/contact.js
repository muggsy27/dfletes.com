import React from 'react';
import { Fragment } from 'react';
import Nav from '../components/nav/nav';
import Header from '../components/header/header';
import Card from '../components/card/card';
import FeaturedImage from '../components/featured-image/featured-image';
import Description from '../components/description/description';
import Footer from '../components/footer/footer';
import github from '../images/github-large.svg';
import angellist from '../images/angellist-large.svg';
import linkedin from '../images/linkedin-large.svg';
import { container, grid, picture } from '../styles/styles.module.css';

export default () => (
  <Fragment>
    <Nav />
    <div className={container}>
      <Header
        title="Let's Talk"
        subtitle="Looking to hire? Just want to talk ReactJS or music? Hit me up!"
      />
      <a href="mailto:derekfletes@gmail.com"><button>Email Me</button></a>
      <Header subtitle="Or...check me out on my professional profiles!" />
      <div className={grid}>
        <Card>
          <FeaturedImage>
            <img src={github} alt="github logo" className={picture} />
          </FeaturedImage>
          <Description
            title="GitHub"
            description="My GitHub profile hosts all of the development projects I have been working on over the past few years."
            link="https://github.com/muggsy27"
          />
        </Card>
        <Card>
          <FeaturedImage>
            <img src={angellist} alt="angellist logo" className={picture} />
          </FeaturedImage>
          <Description
            title="AngelList"
            description="I have worked with a few start ups in the past and would be interested in working with others. My AngelList profile list skills & interests."
            link="https://angel.co/derek-fletes"
          />
        </Card>
        <Card>
          <FeaturedImage>
            <img src={linkedin} alt="linkedin logo" className={picture} />
          </FeaturedImage>
          <Description
            title="LinkedIn"
            description="LinkedIn contains an in-depth look at my professional experiences and skills."
            link="https://www.linkedin.com/in/derekfletes"
          />
        </Card>
      </div>
    </div>
    <Footer />
  </Fragment>
);
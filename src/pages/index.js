import React, { Fragment } from 'react';
import { withPrefix } from 'gatsby';
import Nav from '../components/nav/nav';
import Header from '../components/header/header';
import SubHeader from '../components/sub-header/sub-header';
import Card from '../components/card/card';
import FeaturedImage from '../components/featured-image/featured-image';
import Description from '../components/description/description';
import BigButton from '../components/big-button/big-button';
import Footer from '../components/footer/footer';
import forum from '../images/forum.svg';
import portfolio from '../images/portfolio.svg';
import expense from '../images/expense.svg';
import { container, grid, svg } from '../styles/styles.module.css';

export default () => (
  <Fragment>
    <Nav />
    <div className={container}>
      <Header
        title="Hi. I'm Derek Fletes, an aspiring web & software developer from San Diego ☀️."
        subtitle="I'm a former marketing associate that fell in love with coding after working on a few software teams. Now I build & design my own websites & web applications."
      />
      <SubHeader
        title="Developer Projects"
        subtitle="A couple of things I've coded in the past year."
      />
      <div className={grid}>
        <Card>
          <FeaturedImage>
            <img src={forum} className={svg} alt="forum website" />
          </FeaturedImage>
          <Description
            img={forum}
            title="Producer Forum"
            description="A Reddit-inspired forum built with ReactJS. Key features include authentication and data storage."
            tags={['react', 'redux', 'mongodb', 'css', 'nextjs']}
            github={true}
            link="example.com"
          />
        </Card>
        <Card>
          <FeaturedImage>
            <img src={portfolio} className={svg} alt="portfolio website" />
          </FeaturedImage>
          <Description
            img={portfolio}
            title="Personal Blog & Portfolio Site"
            description="My personal blog and portfolio website. Designed with Sketch. Built with GatsbyJS & ReactJS."
            tags={['react', 'gatsby', 'css']}
            github={true}
            link="example.com"
          />
        </Card>
        <Card>
          <FeaturedImage>
            <img src={expense} className={svg} alt="expense website" />
          </FeaturedImage>
          <Description
            title="Expensify App"
            description="An expense tracking application. Key features include authentication, data storage, and date filters."
            tags={['react', 'redux', 'firebase', 'sass']}
            github={true}
            link="example.com"
          />
        </Card>
      </div>
      <BigButton
        url="#"
        title="View all Repositories"
      />
      <SubHeader
        title="Design Projects"
        subtitle="A couple of things I've designed in the past year."
      />
      <div className={grid}>
        <Card>
          <FeaturedImage>
            <img src={forum} className={svg} alt="forum website" />
          </FeaturedImage>
          <Description
            title="Music Producer Forum"
            description="A music producer forum designed in the style of designernews.com and Reddit."
            sketch={true}
            link={withPrefix('/producer-forum.sketch')}
          />
        </Card>
        <Card>
          <FeaturedImage>
            <img src={portfolio} className={svg} alt="portfolio website" />
          </FeaturedImage>
          <Description
            title="Personal Blog & Portfolio"
            description="My personal blog and portfolio design inspired by the lapa.ninja community and Google's material design."
            sketch={true}
            link={withPrefix('/blog-and-portfolio.sketch')}
          />
        </Card>
      </div>
      <SubHeader
        title="Resume"
        subtitle="In docx & pdf formats."
      />
      <div className={grid}>
        <Card>
          <Description
            word={true}
            link="derekfletes_resume.docx"
          />
        </Card>
        <Card>
          <Description
            pdf={true}
            link="derekfletes_resume.pdf"
          />
        </Card>
      </div>
    </div>
    <Footer />
  </Fragment>
);
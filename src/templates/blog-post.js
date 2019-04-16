import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import favicon from '../images/favicon.png';
import Nav from '../components/nav/nav';
import BlogHeader from '../components/blog-header/blog-header';
import BlogPost from '../components/blog-post/blog-post';
import BlogLinks from '../components/blog-links/blog-links';
import Footer from '../components/footer/footer';
import { container } from '../styles/styles.module.css';
import 'prismjs/themes/prism-tomorrow.css';

export default function Template({ data, pageContext }) {
  const { html, frontmatter: { author, date, title, tags } } = data.markdownRemark;
  const next = pageContext.next ? pageContext.next.fields.slug : false;
  const prev = pageContext.prev ? pageContext.prev.fields.slug : false;

  return (
    <Fragment>
      <Helmet
        meta={[{ charset: 'utf-8' }]}
        title={`${title}`}
        link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
      />
      <Nav />
      <div className={container}>
        <BlogHeader
          title={title}
          author={author}
          date={date}
          tags={tags}
        />
        <BlogPost html={html} />
        <BlogLinks prev={prev} next={next} />
      </div>
      <Footer />
    </Fragment>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
        date(formatString: "DD MMMM, YYYY")
        timeToRead
        title
        tags
      }
    }
  }
`
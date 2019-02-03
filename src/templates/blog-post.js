import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Nav from '../components/nav/nav';
import BlogPost from '../components/blog-post/blog-post';
import Footer from '../components/footer/footer';
import { container } from '../styles/styles.module.css';

export default function Template({ data, pageContext }) {
  const { html, frontmatter: { author, date, title, tags } } = data.markdownRemark;
  const next = pageContext.next ? pageContext.next.fields.slug : false;
  const prev = pageContext.prev ? pageContext.prev.fields.slug : false;

  return (
    <Fragment>
      <Nav />
      <div className={container}>
        <BlogPost html={html} />
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
      }
    }
  }
`
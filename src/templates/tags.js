import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Nav from '../components/nav/nav';
import Header from '../components/header/header';
import Categories from '../components/categories/categories';
import CardContainer from '../components/card-container/card-container';
import Footer from '../components/footer/footer';
import { container } from '../styles/styles.module.css';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark

  return (
    <Fragment>
      <Nav />
      <div className={container}>
        <Header
          title={tag}
          subtitle={`${totalCount} post${totalCount === 1 ? "" : "s"} tagged with ${tag}`}
        />
        <Categories />
        <CardContainer {...data} />
      </div>
      <Footer />
    </Fragment>
  )
}

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            author
            timeToRead
          }
          fields {
            slug
          }
          excerpt(pruneLength: 60)
        }
      }
    }
  }
`
import React, { Component, Fragment } from "react";
import { graphql } from "gatsby";
import Nav from '../../components/nav/nav';
import Header from '../../components/header/header';
import Search from '../../components/search/search';
import Categories from '../../components/categories/categories';
import CardContainer from '../../components/card-container/card-container';
import Footer from '../../components/footer/footer';
import { container } from '../../styles/styles.module.css';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }
  }

  setSearchState = search => this.setState({ search });

  render() {
    const { data } = this.props;
    const { search } = this.state;

    return (
      <Fragment>
        <Nav />
        <div className={container}>
          <Header
            title="Blog"
            subtitle="Writing about web & software technologies I have worked with recently."
          />
          <Search setSearchState={this.setSearchState} />
          <Categories />
          <CardContainer
            {...data}
            search={search}
          />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export const query = graphql`
   query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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
          excerpt(pruneLength: 120)
        }
      }
    }
  }
`;
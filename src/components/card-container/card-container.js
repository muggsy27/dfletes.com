import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby';
import Card from '../card/card';
import Description from '../description/description';
import AuthorInfo from '../author-info/author-info';
import ErrorMessage from '../error-message/error-message';
import { grid, link } from '../../styles/styles.module.css';

class CardContainer extends Component {
  render() {
    // { edges } is desctructured from the graphql query data recieved from the BlogCard {...data} props
    const { edges } = this.props.allMarkdownRemark;

    // search comes from the search props passed from the <App /> component or is null if on tag page
    const search = this.props.search || '';

    // filters blog posts from { edges } and returns results that match { search } value 
    const filteredEdges = edges.filter(edge => {
      return edge.node.frontmatter.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });

    return (
      <Fragment>
        {filteredEdges.length > 0 ? (
          <div className={grid}>
            {filteredEdges.map(edge => (
              <Card key={edge.node.id}>
                <Link to={`${edge.node.fields.slug}`} className={link}>
                  <Description
                    title={edge.node.frontmatter.title}
                    date={edge.node.frontmatter.date}
                    description={edge.node.excerpt}
                  >
                    <AuthorInfo
                      author={edge.node.frontmatter.author}
                      timeToRead={edge.node.frontmatter.timeToRead}
                    />
                  </Description>
                </Link>
              </Card>
            ))}
          </div>
        )
          :
          <ErrorMessage />}
      </Fragment>
    );
  }
}

export default CardContainer;
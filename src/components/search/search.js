import React, { Component, Fragment } from 'react';
import { input } from './search.module.css';

class Search extends Component {
  handleOnChange = e => {
    const search = e.target.value;
    const { setSearchState } = this.props;

    setSearchState(search);
  }

  render() {
    return (
      <Fragment>
        <input
          className={input}
          onChange={this.handleOnChange}
          placeholder="Search the technology I use..."
          type="text"
        />
      </Fragment>
    );
  }
}

export default Search;

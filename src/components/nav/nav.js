import React, { Component } from 'react';
import { Link } from 'gatsby';
import Hamburger from '../hamburger/hamburger';
import Dropdown from '../dropdown/dropdown';
import { container, nav, link } from './nav.module.css';
import shaka from '../../images/shaka.svg';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  toggleMenu = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    document.addEventListener('click', this.closeMenu);
  }

  closeMenu = () => {
    this.setState({ isOpen: false });
    document.removeEventListener('click', this.closeMenu);
  }

  render() {
    const { isOpen } = this.state;

    return (
      <nav className={container}>
        <div className={nav}>
          <Link to="/">
            <img
              src={shaka}
              alt="shaka logo"
            />
          </Link>
          <div>
            <Link
              to="/about-me"
              activeStyle={{ color: '#2196F3' }}
              className={link}
            >
              About Me
            </Link>
            <Link
              to="/blog"
              activeStyle={{ color: '#2196F3' }}
              className={link}
            >
              Blog
            </Link>
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </div>
          <Hamburger
            isOpen={isOpen}
            toggleMenu={this.toggleMenu}
          />
          <Dropdown isOpen={isOpen} />
        </div>
      </nav>
    );
  }
}

export default Nav;
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header>
      <h1>RESTy</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/history">history</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
// Link labeled “Home” that links to ‘/’ and shows the search form/results page
// Link labeled “History” that links to ‘/history’ and loads the history page
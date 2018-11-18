import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.scss";

const Navigation = props => {
  const { match } = props;

  return (
    <nav className="nav">
      <ul className="nav__items">
        <li className="nav__item">
          <Link
            to="/"
            className={match.params.category === undefined ? "selected" : ""}
          >
            App
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/posts"
            className={match.params.category === "posts" ? "selected" : ""}
          >
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  match: PropTypes.object.isRequired
};

export default Navigation;

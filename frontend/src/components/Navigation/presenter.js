import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import "./styles.scss";

const Navigation = props => {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <ul className="nav__items">
          <li className="nav__item">
            <Ionicon icon="ios-search" />
          </li>
          <li className="nav__item">
            <Link to="/">
              <img src={require("../../images/logo.png")} alt="" />
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/">
              <Ionicon icon="md-contact" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  match: PropTypes.object.isRequired
};

export default Navigation;

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import PartyFindForm from "../PartyFindForm";
import "./styles.scss";

const Navigation = props => {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <ul className="nav__items">
          <li className="nav__item" onClick={() => props.handleFindModalOpen()}>
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
      <div
        className={props.isFindModalOpen ? "modal" : "modal modal--none"}
        onClick={() => props.handleFindModalClose()}
      >
        <div className="modal__content" onClick={e => e.stopPropagation()}>
          <PartyFindForm handleFindModalClose={props.handleFindModalClose} />
        </div>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  match: PropTypes.object.isRequired,
  isFindModalOpen: PropTypes.bool.isRequired,
  handleFindModalOpen: PropTypes.func.isRequired,
  handleFindModalClose: PropTypes.func.isRequired
};

export default Navigation;

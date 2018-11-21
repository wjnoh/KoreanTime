import React from "react";
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.scss";

const PartyCard = props => {
  return (
    <>
      {props.isPlus ? (
        <>
          <div
            className="party-card"
            onClick={() => props.handlePartyModalOpen()}
          >
            <div className="party-card__container">
              <div className="party-card__content">
                <div className="party-card__plus">
                  <Ionicon icon="md-add" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="party-card">
          <div className="party-card__container">
            <div className="party-card__content">
              <Link to="/party/1">
                <img src={require("../../images/sample.png")} alt="party" />
                <span>유니스트</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

PartyCard.propTypes = {
  handlePartyModalOpen: PropTypes.func,
  handlePartyModalClose: PropTypes.func
};

export default PartyCard;

import React from "react";
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";
import "./styles.scss";

const PartyCard = props => {
  return (
    <div className="party-card">
      <div className="party-card__container">
        <div className="party-card__content">
          {props.isPlus ? (
            <div className="party-card__plus">
              <Ionicon icon="md-add" />
            </div>
          ) : (
            <Link to="/party/1">
              <img src={require("../../images/sample.png")} alt="party" />
              <span>유니스트</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartyCard;

import React from "react";
import Ionicon from "react-ionicons";
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
            <>
              <img
                src="http://www.topstarnews.net/news/photo/201807/450297_101922_452.jpg"
                alt=""
              />
              <span>유니스트</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartyCard;

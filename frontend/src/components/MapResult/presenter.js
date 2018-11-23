import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const MapResult = props => {
  return (
    <div className="map-result__wrapper">
      <form className="map-result">
        <div className="map-result__header">
          <h1>유니스트 해커톤</h1>
          <div
            className="close-button"
            onClick={() => props.handleResultModalClose()}
          >
            &times;
          </div>
        </div>
        <div className="map-result__content" />
      </form>
    </div>
  );
};

MapResult.propTypes = {
  handleResultModalClose: PropTypes.func
};

export default MapResult;

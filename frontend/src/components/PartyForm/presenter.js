import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const PartyForm = props => {
  return (
    <div className="party-form__wrapper">
      <form className="party-form">
        <div className="party-form__header">
          <h1>새로운 모임 만들기</h1>
          <div
            className="close-button"
            onClick={() => props.handlePartyModalClose()}
          >
            &times;
          </div>
        </div>
        <div className="party-form__content">
          <input
            type="text"
            className="input"
            placeholder="모임의 이름을 입력하세요."
          />
          <div className="submit-button">모임 만들기</div>
        </div>
      </form>
    </div>
  );
};

PartyForm.propTypes = {
  handlePartyModalClose: PropTypes.func.isRequired
};

export default PartyForm;

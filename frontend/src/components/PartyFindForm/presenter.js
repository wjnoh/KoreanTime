import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const PartyFindForm = props => {
  return (
    <div className="party-find__wrapper">
      <form className="party-find">
        <div className="party-find__header">
          <h1>모임 가입하기</h1>
          <div
            className="close-button"
            onClick={() => props.handleFindModalClose()}
          >
            &times;
          </div>
        </div>
        <div className="party-find__content">
          <input
            type="text"
            className="input"
            placeholder="모임의 초대코드를 입력하세요."
            required
          />
          <button className="submit-button">모임 가입하기</button>
        </div>
      </form>
    </div>
  );
};

PartyFindForm.propTypes = {
  handleFindModalClose: PropTypes.func.isRequired
};

export default PartyFindForm;

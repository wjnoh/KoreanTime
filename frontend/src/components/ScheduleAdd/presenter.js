import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const ScheduleAdd = props => {
  return (
    <div className="schedule-form__wrapper">
      <form className="schedule-form">
        <div className="schedule-form__header">
          <h1>새로운 일정 등록하기</h1>
          <div
            className="close-button"
            onClick={() => props.handleScheduleModalClose()}
          >
            &times;
          </div>
        </div>
        <div className="schedule-form__content">
          <input
            type="text"
            className="input"
            placeholder="일정 제목을 입력하세요."
            required
          />
          <input type="date" className="input-date" name="" id="" required />
          <input type="time" className="input-time" name="" id="" required />
          <input
            type="text"
            className="input"
            placeholder="장소를 입력하세요."
            required
          />
          <input
            type="text"
            className="input"
            placeholder="설명을 입력하세요."
            required
          />
          <button className="submit-button">일정 등록하기</button>
        </div>
      </form>
    </div>
  );
};

ScheduleAdd.propTypes = {
  handleScheduleModalClose: PropTypes.func.isRequired
};

export default ScheduleAdd;

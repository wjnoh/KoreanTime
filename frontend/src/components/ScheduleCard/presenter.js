import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.scss";

const ScheduleCard = props => {
  return (
    <div
      className={
        props.isTimeUp
          ? "party__schedule party__schedule--blur"
          : "party__schedule"
      }
    >
      <div className="party__schedule-info">
        <span className="schedule-title">유니스트 해커톤(D-4)</span>
        <span className="schedule-detail">
          UNIST 경동홀, 11월 23일 14시 30분
        </span>
        <span className="schedule-message">늦지 않게 참석해주세요!</span>
      </div>
      <Link to="/party/1/map/1">
        <div className="schedule-location">팀원 위치 확인</div>
      </Link>
    </div>
  );
};

ScheduleCard.propTypes = {
  isTimeUp: PropTypes.bool
};

export default ScheduleCard;

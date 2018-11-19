import React from "react";
import "./styles.scss";

function ScheduleCard() {
  return (
    <div className="party__schedule">
      <div className="party__schedule-info">
        <span className="schedule-title">유니스트 해커톤(D-4)</span>
        <span className="schedule-detail">
          UNIST 경동홀, 11월 23일 14시 30분
        </span>
        <span className="schedule-message">늦지 않게 참석해주세요!</span>
      </div>
      <div className="schedule-location">팀원 위치 확인</div>
    </div>
  );
}

export default ScheduleCard;

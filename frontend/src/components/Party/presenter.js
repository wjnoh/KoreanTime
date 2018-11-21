import React from "react";
import ScheduleCard from "../ScheduleCard";
import "./styles.scss";

const Party = () => {
  return (
    <section className="party">
      <div className="party__container">
        <h1>유니스트 모임</h1>
        <div className="party__cols">
          <div className="party__col">
            <div className="party__info">
              <img src={require("../../images/sample.png")} alt="party" />
              <span className="info-number">인원 6명</span>
              <span className="info-when">03월 24일 개설</span>
              <span className="info-invite">초대코드 : gTZX4</span>
            </div>
            <div className="party__menus">
              <div className="party__menu">
                <img
                  src={require("../../images/icons/write.png")}
                  alt="add schedule"
                />
                <span>일정등록</span>
              </div>
              <div className="party__menu">
                <img
                  src={require("../../images/icons/schedule.png")}
                  alt="see schedule"
                />
                <span>일정보기</span>
              </div>
              <div className="party__menu">
                <img
                  src={require("../../images/icons/photo.png")}
                  alt="album"
                />
                <span>사진첩</span>
              </div>
              <div className="party__menu">
                <img
                  src={require("../../images/icons/team.png")}
                  alt="manage team"
                />
                <span>팀원관리</span>
              </div>
            </div>
          </div>
          <div className="party__col">
            <div className="party__schedules">
              <ScheduleCard />
              <ScheduleCard />
              <ScheduleCard isTimeUp={true} />
              <ScheduleCard isTimeUp={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Party;

import React from "react";
import PartyCard from "../PartyCard";
import PartyForm from "../PartyForm";
import PropTypes from "prop-types";
import "./styles.scss";

const PartyCards = props => {
  return (
    <>
      <div className="background-main">
        <div className="background-content">
          <div className="background-text">
            <img
              className="background-logo"
              src={require("../../images/logo-white.png")}
              alt=""
            />
            <div className="background-divider" />
            <h1>
              다신<span className="bold">늦지 않게</span> 해줄게
            </h1>
            <span>프로지각쟁이들을 위한 수치플 플랫폼</span>
            <span>약속 당일 팀원들의 위치 확인 가능</span>
            <span>지각시 지각시간을 페이스북에 자동 업로드</span>
          </div>
        </div>
      </div>
      <section className="party-cards">
        <h1>내 모임</h1>
        <div
          className={props.isPartyModalOpen ? "modal" : "modal modal--none"}
          onClick={() => props.handlePartyModalClose()}
        >
          <div className="modal__content" onClick={e => e.stopPropagation()}>
            <PartyForm handlePartyModalClose={props.handlePartyModalClose} />
          </div>
        </div>
        <div className="party-cards__conatiner">
          <PartyCard
            isPlus={true}
            handlePartyModalOpen={props.handlePartyModalOpen}
            handlePartyModalClose={props.handlePartyModalClose}
          />
          <PartyCard />
          <PartyCard />
          <PartyCard />
          <PartyCard />
          <PartyCard />
        </div>
      </section>
    </>
  );
};

PartyCards.propTypes = {
  isPartyModalOpen: PropTypes.bool.isRequired,
  handlePartyModalOpen: PropTypes.func.isRequired,
  handlePartyModalClose: PropTypes.func.isRequired
};

export default PartyCards;

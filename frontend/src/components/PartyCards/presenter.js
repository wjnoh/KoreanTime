import React from "react";
import PartyCard from "../PartyCard";
import PartyForm from "../PartyForm";
import PropTypes from "prop-types";
import "./styles.scss";

const PartyCards = props => {
  return (
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
  );
};

PartyCards.propTypes = {
  isPartyModalOpen: PropTypes.bool.isRequired,
  handlePartyModalOpen: PropTypes.func.isRequired,
  handlePartyModalClose: PropTypes.func.isRequired
};

export default PartyCards;

import React from "react";
import PartyCard from "../PartyCard";
import "./styles.scss";

const PartyCards = props => {
  return (
    <section className="party-cards">
      <h1>내 모임</h1>
      <div className="party-cards__conatiner">
        <PartyCard isPlus={true} />
        <PartyCard />
        <PartyCard />
        <PartyCard />
        <PartyCard />
        <PartyCard />
      </div>
    </section>
  );
};

export default PartyCards;

import React from "react";
import PartyCard from "../PartyCard";
import "./styles.scss";

const PartyCards = props => {
  return (
    <section className="party-cards">
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

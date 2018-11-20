import React from "react";
import "./styles.scss";

const Marker = props => {
  return (
    <>
      {props.type === "flag" ? (
        <div className="marker-flag">
          <img src={require("../../images/flag.png")} alt="" />
        </div>
      ) : (
        ""
      )}
      {props.type === "footprint" ? (
        <div
          className="marker-footprint"
          style={{ backgroundColor: props.color }}
        >
          <img src={require("../../images/footprint.png")} alt="" />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Marker;

import React from "react";
import GoogleMapReact from "google-map-react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import "./styles.scss";

const Map = props => {
  return (
    <>
      <div className="map__wrapper">
        <div className="map-title">
          <h1>팀원 위치 확인</h1>
        </div>
        <section className="map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCluD-n1MOKpKT6ckGfqcH76cAmBy1Y9aM"
            }}
            center={{ lat: 36.3610488, lng: 127.34477300000003 }}
            defaultZoom={15}
          />
          <div
            className={
              props.mapInfoOpen ? "map-info map-info--open" : "map-info"
            }
            onClick={e => {
              e.preventDefault();
            }}
          >
            <div
              className={
                props.mapInfoOpen ? "map-button map-button--open" : "map-button"
              }
              onClick={() => {
                props.mapInfoOpen ? props.closeMapInfo() : props.openMapInfo();
              }}
            >
              <Ionicon icon="md-information" />
            </div>
            <div
              className={
                props.mapInfoOpen
                  ? "map-info__content map-info__content--open"
                  : "map-info__content"
              }
            >
              <span className="content-title">유니스트 해커톤(10분 전)</span>
              <span className="content-when">11월 23일 14시 30분</span>
              <span className="content-where">유니스트 경동홀</span>
              <span className="content-arrived">
                도착: 노우제, 박경철, 정다은
              </span>
              <div className="content-notArrived">
                미도착: 정경선, 황한나, 김정현
              </div>
            </div>
          </div>
          <div
            className={props.mapInfoOpen ? "map-dim map-dim--open" : "map-dim"}
            onClick={() => props.closeMapInfo()}
          />
        </section>
      </div>
    </>
  );
};

Map.propTypes = {
  mapInfoOpen: PropTypes.bool.isRequired,
  openMapInfo: PropTypes.func.isRequired,
  closeMapInfo: PropTypes.func.isRequired
};

export default Map;

import React from "react";
import GoogleMapReact from "google-map-react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import googleKeys from "../../shared/googleKeys.json";
import Marker from "../Marker";
import "./styles.scss";

const colorArray = [
  "#adb5bd",
  "#f06595",
  "#cc5de8",
  "#339af0",
  "#51cf66",
  "#845ef7"
];

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
              key: googleKeys.googleMap
            }}
            center={{ lat: 36.36277080000001, lng: 127.34482849999995 }}
            defaultZoom={15}
          >
            <Marker
              type="flag"
              lat={36.36277080000001}
              lng={127.34482849999995}
            />
            <Marker
              type="footprint"
              color={colorArray[0]}
              lat={36.358466}
              lng={127.34231339999997}
            />
            <Marker
              type="footprint"
              color={colorArray[1]}
              lat={36.358757}
              lng={127.34393769999997}
            />
            <Marker
              type="footprint"
              color={colorArray[2]}
              lat={36.3667148}
              lng={127.3443006}
            />
            <Marker
              type="footprint"
              color={colorArray[3]}
              lat={36.3623035}
              lng={127.35607860000005}
            />
            <Marker
              type="footprint"
              color={colorArray[4]}
              lat={36.3624031}
              lng={127.3458071}
            />
            <Marker
              type="footprint"
              color={colorArray[5]}
              lat={36.3647427}
              lng={127.33960669999999}
            />
          </GoogleMapReact>
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
                도착 :
                <span
                  className="person-name"
                  style={{ backgroundColor: colorArray[0] }}
                >
                  노우제
                </span>
                <span
                  className="person-name"
                  style={{ backgroundColor: colorArray[1] }}
                >
                  박경철
                </span>
                <span
                  className="person-name"
                  style={{ backgroundColor: colorArray[2] }}
                >
                  정다은
                </span>
              </span>
              <div className="content-notArrived">
                미도착 :
                <span
                  className="person-name"
                  style={{ backgroundColor: colorArray[3] }}
                >
                  정경선
                </span>
                <span
                  className="person-name"
                  style={{ backgroundColor: colorArray[4] }}
                >
                  황한나
                </span>
                <span
                  className="person-name"
                  style={{ backgroundColor: colorArray[5] }}
                >
                  김정현
                </span>
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

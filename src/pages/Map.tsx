import { useEffect, useState } from "react";
import styled from "styled-components";
import { useGeoLocation } from "../utils/useGeoLocation";
import { Container, Marker, NaverMap, useNavermaps } from "react-naver-maps";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 6000,
  maximumAge: 1000 * 3600 * 24,
};

export const MapPage = () => {
  const { location, error } = useGeoLocation(geolocationOptions);
  const navermaps = useNavermaps();

  console.log(location);
  return (
    <Wapper>
      <Title>⭐️ 근처 참여가능 기부활동 위치</Title>
      <Container style={{ width: "100%", height: "600px" }}>
        {location && (
          <NaverMap
            defaultCenter={
              new navermaps.LatLng(location.latitude, location.longitude)
            }
            defaultZoom={14}
          >
            <Marker
              defaultPosition={{
                lat: location.latitude,
                lng: location.longitude,
              }}
            />
          </NaverMap>
        )}
      </Container>
    </Wapper>
  );
};

const Wapper = styled.div`
  padding: 32px 0;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  padding: 0 0 25px 10px;
`;

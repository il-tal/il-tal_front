import { useEffect } from "react";
import styled from "styled-components";

const KakaoMap = ({ address, company }) => {
  const { kakao } = window;
  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 지도에 확대 축소 컨트롤을 생성한다
    var zoomControl = new kakao.maps.ZoomControl();

    // 지도의 우측에 확대 축소 컨트롤을 추가한다
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(`${address}`, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        map.setCenter(coords);
      }
    });
  }, [address]);

  return (
    <>
      <MapWrap>
        <div
          className="map"
          id="map"
          style={{ width: "580px", height: "520px" }}
        ></div>
      </MapWrap>
    </>
  );
};

export default KakaoMap;

const MapWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: relative;
`;

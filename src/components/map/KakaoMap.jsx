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

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(`${address}`, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        // var infowindow = new kakao.maps.InfoWindow({
        //   content: `<div style="display:flex;width:100%;text-align:center;padding:6px 0;">${company}</div>`,
        // });
        // infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
  }, []);

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

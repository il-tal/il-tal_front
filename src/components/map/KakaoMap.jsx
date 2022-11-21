import { useEffect } from "react";
import styled from "styled-components";

const KakaoMap = ({ setClose }) => {
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
    geocoder.addressSearch(
      `경상남도 창원시 성산구 가음정로 59`,
      function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          var infowindow = new kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;">우리집</div>`,
          });
          infowindow.open(map, marker);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        }
      }
    );
  }, []);

  return (
    <>
      <MapWrap>
        <div className="close" onClick={() => setClose(true)}>
          닫기X
        </div>
        <div
          className="map"
          id="map"
          style={{ width: "500px", height: "500px" }}
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

  .close {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    height: 20px;
    width: 60px;
    background-color: gray;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
`;

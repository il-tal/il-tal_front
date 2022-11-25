import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { companyWish, getDetailCompany } from "../../api";
import CompanyTheme from "./CompanyTheme";
import KakaoMap from "../map/KakaoMap";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const DetailCompany = () => {
  //업체 아이디 받기
  const { id } = useParams();
  const navigate = useNavigate();

  //업체 상세페이지 GET요청
  const { data, isLoading } = useQuery(["getDetailCompany"], () =>
    getDetailCompany(id)
  );

  //데이터 refetch 클라이언트
  const queryClient = useQueryClient();

  const companyLike = useMutation((companyId) => companyWish(companyId), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getDetailCompany"]);
      console.log(companyLike);
    },
  });

  //로딩처리
  if (isLoading) return <div>loading...</div>;
  return (
    <Container>
      <CompanyWrap>
        <div className="pic-map-wrap">
          <CompanyPic>
            <img src={data.data.companyImgUrl} />
          </CompanyPic>
          <CompanyMap>
            <KakaoMap
              address={data.data.address}
              company={data.data.companyName}
            />
          </CompanyMap>
        </div>
        <div className="text-info-wrap">
          <CompanyText>
            <div className="company">{data.data.companyName}</div>
            <div className="review">
              ⭐{data.data.companyScore} 이용후기 {data.data.totalReviewCnt}건
            </div>
            <div className="button-wrap">
              <button
                className="homepage"
                onClick={() => window.open(data.data.companyUrl, "_blank")}>
                홈페이지
              </button>
              <button
                onClick={() => companyLike.mutate({ companyId: id })}
                className="like">
                {data.data.companyLikeCheck ? (
                  <div>좋아요 취소</div>
                ) : (
                  <div>좋아요❤️</div>
                )}
              </button>
            </div>
          </CompanyText>
          <CompanyInfo>
            <span>{data.data.address}</span>
            <span>{data.data.phoneNumber}</span>
            <span>{data.data.workHour}</span>
          </CompanyInfo>
        </div>
      </CompanyWrap>
      <ThemeWrap>
        {data.data.themeList.map((theme) => {
          return (
            <div
              className="test"
              onClick={() => navigate(`/theme/${theme.id}`)}>
              <CompanyTheme theme={theme} key={theme.id} />
            </div>
          );
        })}
      </ThemeWrap>
    </Container>
  );
};
export default DetailCompany;

const Container = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const CompanyWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  flex-direction: column;
  .pic-map-wrap {
    display: flex;
    justify-content: space-between;
  }
  .text-info-wrap {
    display: flex;
    justify-content: space-between;
    margin: 10px 0%;
  }
`;
const CompanyPic = styled.div`
  height: 350px;
  width: 650px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    display: flex;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const CompanyText = styled.div`
  height: 150px;
  width: 650px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .company {
    font-size: 25px;
    font-weight: bold;
  }
  .review {
    font-size: 18px;
  }
  .homepage {
    width: 80px;
    height: 30px;
    margin-right: 20px;
  }
  .like {
    width: 100px;
    height: 30px;
  }
`;

const CompanyInfo = styled.div`
  width: 450px;
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    font-size: 18px;
  }
`;

const CompanyMap = styled.div`
  height: 350px;
  width: 450px;
`;

const ThemeWrap = styled.div`
  height: 100%;
  width: 100%;
  .test:hover {
    transform: scale(1.04);
    transition: all ease 0.5s;
  }
`;

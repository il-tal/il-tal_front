import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { companyWish, getDetailCompany } from "../../api";
import CompanyTheme from "./CompanyTheme";
import KakaoMap from "../map/KakaoMap";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

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
              <span>★</span> {data.data.companyScore} (
              {data.data.totalReviewCnt})
            </div>
            <div className="button-wrap">
              <button
                className="homepage"
                onClick={() => window.open(data.data.companyUrl)}>
                홈페이지
              </button>
              <button
                onClick={() => companyLike.mutate({ companyId: id })}
                className="like">
                {data.data.companyLikeCheck ? (
                  <div className="like-wrap">
                    {<BsSuitHeartFill color={"#06c387"} size="20" />} 좋아요{" "}
                    {data.data.totalLikeCnt}
                  </div>
                ) : (
                  <div className="like-wrap">
                    {<BsSuitHeart size="20" />} 좋아요
                    {data.data.totalLikeCnt}
                  </div>
                )}
              </button>
            </div>
          </CompanyText>
          <CompanyInfo>
            <div className="icon-wrap">
              <FiMapPin size="25px" />
              <span>{data.data.address}</span>
            </div>
            <div className="icon-wrap">
              <FiPhone size="25px" />
              <span>{data.data.phoneNumber}</span>
            </div>
            <div className="icon-wrap">
              <AiOutlineClockCircle size="25px" />
              <span>{data.data.workHour}</span>
            </div>
          </CompanyInfo>
        </div>
      </CompanyWrap>
      <ThemeWrap>
        {data.data.themeList.map((theme) => {
          return (
            <div className="test">
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
  height: 840px;
  width: 1440px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .pic-map-wrap {
    width: 1440px;
    display: flex;
    justify-content: space-between;
  }
  .text-info-wrap {
    display: flex;
    justify-content: space-between;
    margin: 40px 0;
  }
`;
const CompanyPic = styled.div`
  height: 520px;
  width: 830px;
  border-radius: 8px;
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
  width: 840px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .company {
    font-size: 40px;
    font-weight: bold;
  }
  .review {
    margin-top: 20px;
    font-size: 24px;
    span {
      font-size: 23px;
      color: var(--color-main);
    }
  }
  .button-wrap {
    margin-top: 30px;
    width: 500px;
    display: flex;
    justify-content: space-between;
  }
  .homepage {
    width: 220px;
    height: 48px;
    border-radius: 8px;
    background-color: var(--color-main);
    color: white;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }
  .like {
    width: 220px;
    height: 48px;
    border-radius: 8px;
    border: 1px solid gray;
    font-size: 16px;
    background-color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .like-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 72px;
  }
`;

const CompanyInfo = styled.div`
  width: 580px;
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    font-size: 16px;
    margin-left: 10px;
  }
  .icon-wrap {
    display: flex;
    align-items: center;
  }
`;

const CompanyMap = styled.div`
  height: 520px;
  width: 580px;
  border-radius: 8px;
  overflow: hidden;
`;

const ThemeWrap = styled.div`
  height: 100%;
  width: 100%;
`;

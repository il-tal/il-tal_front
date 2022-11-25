import styled from "styled-components";
import ThemePoster from "./ThemePoster";
import { companyWish } from "../../api";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";

//ThemeWrap에서 ThemePoster는 페이징처리하여 3개씩 보여주기

const Company = ({ company }) => {
  const navigator = useNavigate();
  const queryClient = useQueryClient();
  const companyLike = useMutation((companyId) => companyWish(companyId), {
    onSuccess: (res) => {
      queryClient.invalidateQueries(["getCompanyList"]);
      setWish(res.data.companyLikeCheck);
    },
  });

  const [wish, setWish] = useState(company.companyLikeCheck);
  useEffect(() => {
    if (wish) {
      return setWish(company.companyLikeCheck);
    } else {
      return setWish(company.companyLikeCheck);
    }
  }, [company]);

  return (
    <Container>
      <CompanyWrap>
        <CompanyPic>
          <img
            onClick={() => {
              navigator(`/company/${company.id}`);
            }}
            alt=""
            src={company.companyImgUrl}
          />
        </CompanyPic>
        <CompanyText>
          <CompanyName>{company.companyName}</CompanyName>
          <CompanyScore>
            ⭐️⭐️⭐️⭐️⭐️{company.CompanyScore} ({company.totalReviewCnt})
          </CompanyScore>
          <HomepageUrl
            onClick={() => window.open(`${company.companyUrl}`, "_black")}>
            홈페이지
          </HomepageUrl>
        </CompanyText>
        <CompanyLike
          onClick={() => companyLike.mutate({ companyId: company.id })}>
          {wish ? <AiFillHeart color={"red"} /> : <AiOutlineHeart />}{" "}
          {company.companyLikeCnt}
        </CompanyLike>
      </CompanyWrap>
      <ThemeWrap>
        {company.themeList.map((theme) => {
          return <ThemePoster theme={theme} />;
        })}
      </ThemeWrap>
    </Container>
  );
};

export default Company;

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 50px;
  display: flex;
`;

const CompanyWrap = styled.div`
  position: relative;
  height: 100%;
  transition: all 0.2s linear;
  :hover {
    transform: scale(1.02);
  }
`;

const CompanyPic = styled.div`
  height: 351px;
  width: 285px;
  opacity: 0.8;
  position: relative;
  cursor: pointer;
  filter: brightness(30%);
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const CompanyText = styled.div`
  position: absolute;
  top: 25px;
  left: 20px;
  color: white;
`;

const CompanyName = styled.div`
  font-weight: bold;
  font-size: 25px;
  width: 160px;
`;

const CompanyScore = styled.div`
  margin-top: 15px;
  font-weight: bold;
  font-size: 17px;
`;

const HomepageUrl = styled.button`
  margin-top: 15px;
  background-color: white;
  font-size: 17px;
  padding: 5px 20px;
  border: none;
  cursor: pointer;
`;

const CompanyLike = styled.button`
  bottom: 10px;
  left: 10px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  position: absolute;
  cursor: pointer;
`;

const ThemeWrap = styled.div`
  position: absolute;
  margin-top: 27px;
  margin-left: 225px;
  height: 297px;
  width: 100%;
  display: flex;
`;

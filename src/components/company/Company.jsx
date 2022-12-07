import styled from "styled-components";
import ThemePoster from "./ThemePoster";
import { companyWish } from "../../api";
import { useNavigate } from "react-router-dom";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { CompanyCarousel } from "./CompanyCarousel";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

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
          <CompanyCarousel>
            <SwiperSlide>
              <img
                onClick={() => {
                  navigator(`/company/${company.id}`);
                }}
                alt="companypicture"
                src={company.companyImgUrl}
              />
            </SwiperSlide>
            {company.themeList.map((themePics) => {
              return (
                <SwiperSlide>
                  <img
                    onClick={() => {
                      navigator(`/company/${company.id}`);
                    }}
                    alt="themepicture"
                    src={themePics.themeImgUrl}
                  />
                </SwiperSlide>
              );
            })}
          </CompanyCarousel>
        </CompanyPic>
        <CompanyInfo>
          <CompanyName
            onClick={() => {
              navigator(`/company/${company.id}`);
            }}
          >
            {company.companyName}
          </CompanyName>
          <CompanyScore>
            {" "}
            <span>★</span> {company.companyScore} ({company.totalReviewCnt})
          </CompanyScore>

          <CompanyThemeNameGenre>
            {company.themeList.map((themename) => {
              return `#${themename.themeName} `;
            })}
            {/* {company.themeList.map((themegenre) => {
              if (themegenre.genre === "Unknown") {
                return null;
              } else {
                return `#${themegenre.genre} `;
              }
            })} */}
          </CompanyThemeNameGenre>
          <HomepageUrl
            onClick={() => window.open(`${company.companyUrl}`, "_black")}
          >
            홈페이지
          </HomepageUrl>
          <CompanyLike
            onClick={() => companyLike.mutate({ companyId: company.id })}
          >
            {wish ? <BsSuitHeartFill color={"#06c387"} /> : <BsSuitHeart />}{" "}
          </CompanyLike>
        </CompanyInfo>
      </CompanyWrap>
    </Container>
  );
};

export default Company;

const Container = styled.div`
  height: 563px;
  width: 464px;
  margin-top: 10px;
  display: flex;
`;

const CompanyWrap = styled.div`
  height: 563px;
  width: 464px;
  position: relative;
  transition: all 0.1s linear;
  border: 1px solid #8a8a8a;
  object-fit: cover;
  border-radius: 10px;
  overflow: hidden;
  &:hover {
    box-shadow: 0 4px 15px 1px rgba(6, 195, 135, 0.25);
    border: 1px solid #06c387;
  }
`;

const CompanyPic = styled.div`
  height: 300px;
  width: 464px;
  position: relative;
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const CompanyInfo = styled.div`
  height: 263px;
  width: 464px;
  padding: 20px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CompanyName = styled.div`
  font-weight: bold;
  font-size: 25px;
  cursor: pointer;
`;

const CompanyScore = styled.div`
  font-weight: bold;
  font-size: 20px;
  span {
    font-size: 23px;
    color: var(--color-main);
  }
`;

const CompanyThemeNameGenre = styled.div`
  word-break: keep-all;
  word-wrap: break-word;
  height: 90px;
  width: 400px;
  font-size: 20px;
  color: #ababab;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 30px;
`;

const HomepageUrl = styled.button`
  background-color: white;
  font-size: 19px;
  color: #8a8a8a;
  height: 41px;
  width: 220px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  cursor: pointer;
`;

const CompanyLike = styled.button`
  position: absolute;
  font-size: 33px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  right: 15px;
  top: 200px;
`;

// const ThemeWrap = styled.div`
//   position: absolute;
//   margin-top: 27px;
//   margin-left: 225px;
//   height: 297px;
//   width: 100%;
//   display: flex;
// `;

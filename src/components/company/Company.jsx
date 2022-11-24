import styled from "styled-components";
import ThemePoster from "./ThemePoster";
import Carousel from "./Carousel";

//ThemeWrap에서 ThemePoster는 페이징처리하여 3개씩 보여주기

const Company = ({ company }) => {
  return (
    <Container>
      <CompanyWrap>
        <CompanyPic>
          <img src={company.companyImgUrl} />
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
        <CompanyLike>❤️ {company.companyLikeCnt}</CompanyLike>
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
`;

const CompanyWrapTwo = styled.div``;

const CompanyPic = styled.div`
  height: 351px;
  width: 285px;
  opacity: 0.8;
  position: relative;
  filter: brightness(45%);
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    /* background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)); */
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

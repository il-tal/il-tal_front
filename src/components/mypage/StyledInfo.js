import styled from "styled-components";
import setting from "../../asset/img/settings.png";

export const Container = styled.div`
  height: 100%;
  width: 90rem;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(0, auto));

`;

export const Heading = styled.div`
  font-size: 2rem;
  font-weight: bold;
  line-height: 2;
  margin: 0.5rem;
`;

export const BoxWrap = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  min-height: 100%;
  max-height: 100%;
  margin-bottom: 50px;
  display: ${(props)=>props.display};
  grid-template-columns: ${(props)=>props.gridColumns};
  grid-template-rows: ${(props)=>props.gridRows};
`;

export const MyInfoBox = styled.div`
  width: 90rem;
  height: 40rem;
  display: grid;
  margin-bottom: 10px;
  grid-template-columns: 1fr 1.8fr;
`;

export const MainTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const MainTitle = styled.div`
  background-image: url(${(props) => props.BadgeImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  width: 244px;
  height: 244px;
  border-radius: 12rem;
  background-color: #cccccc;
  position: absolute;
  top: -30%;
  margin-left: 171px;
`;

export const UserNameBox = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 4fr 1fr 1fr 1fr;
  background: linear-gradient(252.9deg, #DEFF99 0%, #06C387 72.92%, #119B6F 100%);
  border-radius: 8px;
  top: 25%;
  width: 586px;
  height: 75%;
  box-sizing: border-box;
  padding: 0 20px;
`;

export const TendencyBox = styled.div`
  position: relative;
  min-height: 530px;
  max-height: 530px;
  border-radius: 8px;
  margin: 10px;
  display: grid;
  grid-template-rows: 1fr 4fr;
  background-color: #ffffff;
`;

export const UserEdit = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: right;
  padding: 20px 0;
`;

export const EditGenre = styled.img`
  position: absolute;
  right: 15px;
  top: 15px;

`;

export const UserTitles = styled.div`
  width: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  span{
    display: flex;
    width: 137px;
    justify-content: center;
    align-items: center;
    border-radius: 23px;
    font-size: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.7);
    background-color: rgba(255, 255, 255, 0.3);
    height: 40px;
  }
`;

export const NameEdit = styled.input.attrs({
  placeholder: "변경할 닉네임 입력",
})`
  background-color: transparent;
  border: none;
  font-size: 16px;
  text-align: center;
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-weight: 900;
  font-size: 32px;
  width: 100%;
  color: #ffffff;
`;

export const TitlesBox = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  height: ${(props) => (props.toggle ? 100 : "164px")};
  overflow: hidden;
`;

export const CollapseTitles = styled.div`
  width: 60px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: 1;
  position: relative;
  bottom: 20px;
`;

export const ReviewsBox = styled.div`
  width: 1440px;
  display: flex;
  overflow: hidden;
`;

export const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ComWrap = styled.div`
  min-width: ${(props) => props.width || "708px"};
  min-height: ${(props) => props.height || "708px"};
  width: 100%;
  display: ${(props) => props.display || "grid"};
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "top"};
  align-items: ${(props) => props.align || "center"};
  grid-template-columns: ${(props)=>props.colums||`repeat(2, 1fr)`};
  margin: 10px;
`;

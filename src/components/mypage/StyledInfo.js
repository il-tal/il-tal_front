import styled from "styled-components";

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
  width: 280px;
  height: 280px;
  border-radius: 12rem;
  background-color: #cccccc;
  position: absolute;
  top: -30%;

`;

export const UserNameBox = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 3fr 1fr 1fr 2fr;
  place-items: center;
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
  min-height: 556px;
  max-height: 556px;
  border-radius: 8px;
  margin: 10px;
  padding-right: 30px;
  display: grid;
  grid-template-rows: 1fr 5fr;
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
    width: ${(props)=>props.width||`137px`};
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
  display: flex;
  background-color: transparent;
  border: none;
  height: 40px;
  font-size: 20px;
  width: 100%;
  color: #ffffff;
  text-align: center;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-size: 20px;
  }
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-weight: 900;
  font-size: 32px;
  width: 100%;
  color: #ffffff;
  .user-id{
    height: 18px;
    font-size: 18px;
    font-weight: 400;
    margin-left: 25px;
    color: rgba(255, 255, 255, 0.7);
  }
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
  align-items: center;
  height: 100%;
  max-width: 728px;
`;

export const NotCarousel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const ComWrap = styled.div`
  min-width: ${(props) => props.minWidth || "708px"};
  min-height: ${(props) => props.minHeight || "708px"};
  height: ${(props) => props.height || "708px"};
  grid-template-columns: ${(props)=>props.colums||`repeat(2, 350px)`};
  grid-template-rows: ${(props)=>props.rows||`repeat(2, 350px)`};
  display: ${(props) => props.display || "grid"};
  align-items: ${(props) => props.align || "center"};
  flex-direction: ${(props) => props.direction || "column"};
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
`;

export const NameEditDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .name-edit-btn{
    width: 100px;
    padding: 5px 0;
    border-radius: 5px;
    border: none;
    margin: 0 10px;
  }
`

export const NameEditForm = styled.form`
  font-size: 16px;
  margin: 0 50px;
  padding: 10px;
  color: #ffffff;
`
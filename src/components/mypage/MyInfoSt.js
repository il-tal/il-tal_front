import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 75rem;
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
  max-width: 1200px;
  min-height: 100%;
  margin-bottom: 50px;
`;

export const MyInfoBox = styled.div`
  width: 72.5rem;
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
  z-index: 2;
  width: 280px;
  height: 280px;
  border-radius: 12rem;
  background-color: greenyellow;
`;

export const UserNameBox = styled.div`
  z-index: 1;
  display: grid;
  place-items: center;
  grid-template-rows: 5fr 1fr 1fr 1fr;
  background-color: #e2c2e2;
  position: absolute;
  top: 25%;
  width: 100%;
  height: 75%;
`;
export const TendencyBox = styled.div`
  height: 100%;
  background-color: green;
  margin: 10px;
  display: grid;
  grid-template-rows: 1fr 2fr;
`;

export const EditGenre = styled.div`
  right: 100px;
  top: auto;
  font-size: 1rem;
  position: absolute;
`

export const UserEdit = styled.div`
  text-align: right;
  margin: 25px;
`;
export const UserTitles = styled.div`
  margin: 10px;
  font-size: 1.5rem;
  border : 1px solid;
  padding: 10px 20px;
  border-radius: 25px;
`;
export const UserName = styled.div`
  margin: 5px;
  font-weight: bold;
  font-size: 2rem;
`;

export const TitlesBox = styled.div`
  background-color: yellow;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  height: ${(props) => (props.toggle ? 100 : "148px")};
  overflow: hidden;
  .title-open {
    height: 100%;
    overflow: hidden;
  }
  .title-close {
    height: 165px;
    overflow: hidden;
  }
`;

export const CollapseTitles = styled.div`
  background-color: green;
  width: 40px;
  height: 40px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: 1;
  position: relative;
  bottom: 15px;
`;

export const ReviewsBox = styled.div`
  width: 1280px;
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
  min-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6,1fr);
  margin: 10px;
`;
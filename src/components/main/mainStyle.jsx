import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserBox = styled.div`
  background-image: url(${(props) => props.bgimg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  min-height: 400px;
  max-height: 400px;
  margin-bottom: 160px;
  font-size: 2rem;
  text-align: center;
  justify-content: center;
`;
//
export const UserWarp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 212px;
  width: 100%;
  flex-direction: ${(props) => props.flex};
  justify-content: ${(props) => props.justify};
  text-align: left;
  margin-top: ${(props) => props.mtop};
`;

export const TitleTextWrap = styled.div`
  width: 1440px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

export const UserIntro = styled.div`
  margin-top: 24px;
  font-size: ${(props) => props.font || `3rem`};
  font-weight: ${(props) => props.bold};
  color: ${(props) => props.color || `#0e0e0e`};
`;

export const HeaderTitle = styled.div`
  display: block;
  width: 90rem;
  justify-content: center;
  align-items: left !important;
  font-size: 32px;
  font-weight: 700;
  margin: 24px;
`;

export const UserInfo = styled.div`
  font-size: 1rem;
  width: 90rem;
  margin: ${(props) => props.margin};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.15);
  position: relative;
`;

export const PopularThemeWrap = styled.div`
  width: 90rem;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const RecommandThemeWrap = styled.div`
  width: 90rem;
  margin-top: 25px;
  margin-bottom: 70px;
  display: flex;
  justify-content: left;
  text-align: center;
`;

export const BestUserWrap = styled.div`
  width: 90rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

// UserSummary.jsx
export const UserSummaryBox = styled.div`
  min-width: 1440px;
  max-width: 1440px;
  min-height: 212px;
  max-height: 212px;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
  filter: blur(${(props) => props.blur}rem);
`;

export const RowGrid = styled.div`
  font-size: 1rem;
  display: grid;
  place-items: ${(props) => props.place};
  grid-template-rows: repeat(2, minmax(1fr, 100%));
`;

export const RepTitle = styled.div`
  background-image: url(${(props) => props.mainBadgeImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 144px;
  height: 144px;
  border-radius: 5rem;
  background-color: #ababab;
  box-shadow: 0.3rem 0.3rem 0.5rem #ababab;
`;

export const RepTitleName = styled.div`
  margin: 1.5rem;
  font-size: 20px;
  font-weight: 700;
  background: rgba(6, 195, 135, 0.2);
  border: 1px solid rgba(6, 195, 135, 0.7);
  border-radius: 27.5px;
  width: 198px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RecentTitle = styled.div`
  background-image: url(${(props) => props.recentTitle});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 96px;
  height: 96px;
  border-radius: 8rem;
  background-color: #ababab;
`;

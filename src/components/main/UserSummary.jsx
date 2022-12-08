import styled from "styled-components";
import ProgressBar from "../../utils/progressBar";

const UserSummary = (props) => {
  return (
    <UserSummaryBox blur={props.blur}>
      <RepTitle mainBadgeImg={props.mainBadgeImg}></RepTitle>
      <RowGrid place={"center left"}>
        <RepTitleName>{props.mainBadgeName}</RepTitleName>
        <ProgressBar
          completed={props.completed}
          goal={props.goal}
          height={`2.5rem`}
          width={`600px`}
        />
      </RowGrid>
      <RecentTitle recentTitle={props.RecentTitle} />
      <RecentTitle recentTitle={props.RecentTitle_2} />
      <RecentTitle recentTitle={props.RecentTitle_3} />
    </UserSummaryBox>
  );
};
export default UserSummary;

const UserSummaryBox = styled.div`
  min-width: 1440px;
  max-width: 1440px;
  min-height: 212px;
  max-height: 212px;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
  filter: blur(${(props) => props.blur}rem);
`;

const RowGrid = styled.div`
  font-size: 1rem;
  display: grid;
  place-items: ${(props) => props.place};
  grid-template-rows: repeat(2, minmax(1fr, 100%));
`;

const RepTitle = styled.div`
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

const RepTitleName = styled.div`
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

const RecentTitle = styled.div`
  background-image: url(${(props) => props.recentTitle});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 96px;
  height: 96px;
  border-radius: 8rem;
  background-color: #ababab;
`;

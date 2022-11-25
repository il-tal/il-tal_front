import styled from "styled-components";
import ProgressBar from "../../utils/progressBar";

const UserSummary = (props) => {
  return (
    <UserSummaryBox blur={props.blur}>
      <RepTitle mainBadgeImg={props.mainBadgeImg}></RepTitle>
      <RowGrid place={"center left"}>
        <RepTitleName>{props.mainBadgeName}</RepTitleName>
        <ProgressBar
          bgcolor={"#123123"}
          completed={props.completed}
          goal={props.goal}
          height={`2.5rem`}
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
  width: 100rem;
  height: 15rem;
  display: grid;
  place-items: center;
  grid-template-columns: 1.1fr 3fr 1fr 1fr 1fr;
  filter: blur(${(props) => props.blur}rem);
`;

const RowGrid = styled.div`
  font-size: 1rem;
  min-width: 100%;
  display: grid;
  place-items: ${(props) => props.place};
  grid-template-rows: repeat(2, minmax(1fr, 100%));
`;

const RepTitle = styled.div`
  background-image: url(${(props) => props.mainBadgeImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 10rem;
  height: 10rem;
  border-radius: 5rem;
  background-color: #ababab;
  box-shadow: 0.3rem 0.3rem 0.5rem #ababab;
`;

const RepTitleName = styled.div`
  margin: 1.5rem;
  font-size: 2.5rem;
`;

const RecentTitle = styled.div`
  background-image: url(${(props) => props.recentTitle});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 8rem;
  height: 8rem;
  border-radius: 5rem;
  background-color: #ababab;
  box-shadow: 0.4rem 0.4rem 0.6rem #ababab;
`;

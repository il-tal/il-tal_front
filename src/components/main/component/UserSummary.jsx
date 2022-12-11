import ProgressBar from "../../../utils/progressBar";
import * as Styled from "../mainStyle";

const UserSummary = (props) => {
  return (
    <Styled.UserSummaryBox blur={props.blur}>
      <Styled.RepTitle mainBadgeImg={props.mainBadgeImg}></Styled.RepTitle>
      <Styled.RowGrid place={"center left"}>
        <Styled.RepTitleName>{props.mainBadgeName}</Styled.RepTitleName>
        <ProgressBar
          completed={props.completed}
          goal={props.goal}
          height={`2.5rem`}
          width={`600px`}
        />
      </Styled.RowGrid>
      <Styled.RecentTitle recentTitle={props.RecentTitle} />
      <Styled.RecentTitle recentTitle={props.RecentTitle_2} />
      <Styled.RecentTitle recentTitle={props.RecentTitle_3} />
    </Styled.UserSummaryBox>
  );
};
export default UserSummary;

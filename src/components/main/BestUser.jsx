import styled from "styled-components";
import ProgressBar from "../../utils/progressBar";

const BestUser = (props) => {
  return (
    <>
      <BestUserBox>
        <UserRank>{props.number}</UserRank>
        <BadgeImg src={props.imgUrl} />
        <TitleName>내가 무릎을 꿇은건</TitleName>
        <UserNickName>{props.userName}</UserNickName>
        <ProgressBar
          bgcolor={props.bgcolor}
          completed={props.completed}
          goal={props.goal}
        />
        <AchievementStat>{props.escape} 회</AchievementStat>
      </BestUserBox>
    </>
  );
};
export default BestUser;

const BestUserBox = styled.div`
  margin: 0.625rem;
  padding: 0.625rem;
  width: calc(100%);
  height: 3rem;
  display: flex;
  align-items: center;
  box-shadow: 0.5rem 0.5rem 0.625rem #ababab;
  background-color: #d9d9d9;
  flex-shrink: 0;
`;

const UserRank = styled.div`
  margin: 0.625rem 1.5625rem;
  font-size: 1.875rem;
  font-weight: 600;
`;

const BadgeImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  background-color: #ababab;
  border-radius: 2.2rem;
  flex-shrink: 0;
`;

const TitleName = styled.div`
  margin: 1.25rem;
  width: 10rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
  background-color: #ababab;
  border-radius: 1.25rem;
  flex-shrink: 0;
`;

const UserNickName = styled.div`
  width: 12.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 600;
  flex-shrink: 0;
`;

const AchievementStat = styled.div`
  font-size: 1.125rem;
  margin: 0 1rem;
  width: 2.5rem;
  font-weight: 500;
  color: #000000;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  text-align: center;
`;

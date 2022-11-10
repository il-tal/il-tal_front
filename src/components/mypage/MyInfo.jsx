import styled from "styled-components";
import MyGenre from "./MyGenre";
import MyGraph from "./MyGraph";
import MyReviews from "./MyReviews";
import MyThemes from "./MyThemes";
import MyTitles from "./MyTitles";

const MyInfo = () => {
  return (
    <Container>
      <UserInfo>
        <UserCharactor>
          <MainTitles>대표 칭호</MainTitles>
          <TitleBadge>전설</TitleBadge>
          <div>포챠꼬</div>
          <div>진행도</div>
        </UserCharactor>
        <UserCharactor>
          <MyGenre />
          수정하기
          <MyGraph />
        </UserCharactor>
      </UserInfo>

      <DetailList>
        칭호
        <TitleDisplay>
          <MyTitles />
          <MyTitles />
          <MyTitles />
          <MyTitles />
          <MyTitles />
          <MyTitles />
          <MyTitles />
          <MyTitles />
          <MyTitles />
          <MyTitles />
          <MyTitles />
        </TitleDisplay>
        내 리뷰
        <ReviewDisplay>
          <MyReviews />
          <MyReviews />
          <MyReviews />
        </ReviewDisplay>
        내 테마
        <MyThemes />
      </DetailList>
    </Container>
  );
};
export default MyInfo;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const MainTitles = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 100px;
  margin: 10px 20px;
  padding: 10px;
`;
const TitleBadge = styled.div`
  width: 100px;
  border: 1px solid black;
  text-align: center;
  border-radius: 10px;
  margin: 20px;
`;

const UserInfo = styled.div`
  background-color: #a2cba1;
  justify-content: space-between;
`;

const UserCharactor = styled.div`
  background-color: #b4d491;
`;

const DetailList = styled.div`
  background-color: #f0ff5f;
`;

const TitleDisplay = styled.div`
  display: flex;
  width: 100%;
`;

const ReviewDisplay = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`;

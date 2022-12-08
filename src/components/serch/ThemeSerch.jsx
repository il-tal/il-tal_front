import styled from "styled-components";

const ThemeSerch = ({ img, topinfo, title, botinfo, score, reivew }) => {
  return (
    <Container>
      <Pic>
        <img src={img} alt="poster" />
      </Pic>
      <TextWrap>
        <TextHeader>{topinfo}</TextHeader>
        <TextTitle>{title}</TextTitle>
        <TextExplain>{botinfo}</TextExplain>
        <TextBottom>
          <div>
            ⭐ {score} <span>({reivew})</span>
          </div>
        </TextBottom>
      </TextWrap>
    </Container>
  );
};
export default ThemeSerch;

const Container = styled.div`
  height: 440px;
  width: 340px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 17px 27px 0;
`;

const Pic = styled.div`
  height: 216px;
  width: 340px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  img {
    display: flex;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const TextWrap = styled.div`
  width: 340px;
  height: 224px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 5px;
`;
const TextHeader = styled.div`
  width: 310px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  color: grey;
  font-size: 20px;
`;
const TextTitle = styled.div`
  width: 310px;
  height: 80px;
  font-size: 23px;
  font-weight: bold;
  margin: 5px 0;
  display: flex;
  cursor: pointer;
`;
const TextExplain = styled.div`
  width: 310px;
  height: 35px;
  font-size: 16px;
  color: grey;
`;
const TextBottom = styled.div`
  width: 310px;
  height: 35px;
  font-size: 20px;

  display: flex;
  justify-content: space-between;
`;

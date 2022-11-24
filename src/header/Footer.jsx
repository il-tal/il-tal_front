import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div className="layout">
        <div className="logo">일탈</div>
        <div className="name">
          <div className="fe">
            <div className="space">FE</div>
            <div>정영훈</div>
            <div>박혜민</div>
            <div>김휘린</div>
          </div>
          <div className="be">
            <div className="space">BE</div>
            <div>이기재</div>
            <div>한수진</div>
            <div>남궁은</div>
          </div>
          <div className="ui">
            <div className="space">UI/UX</div>
            <div>전현주</div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Footer;

const Container = styled.footer`
  height: 175px;
  width: 100%;
  border-top: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  .layout {
    width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    width: 220px;
    font-size: 36px;
    color: rgba(255, 183, 67, 1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .name {
    display: flex;
    font-size: 20px;
    color: gray;
  }
  .fe {
    display: flex;
    div {
      margin-right: 5px;
    }
  }
  .be {
    margin-left: 30px;
    display: flex;
    div {
      margin-right: 5px;
    }
  }
  .ui {
    margin-left: 30px;
    display: flex;
    div {
      margin-right: 5px;
    }
  }
  .space {
    margin-right: 10px;
  }
`;

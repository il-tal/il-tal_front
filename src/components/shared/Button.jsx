import styled from "styled-components";

/**
 * @onClick 버튼 이벤트 관련
 * @disabled on/off 효과 제어
 * @label 버튼 이름
 */
export const Button = (props) => {
  return (
    <ButtonStyle onClick={props.onClick} disabled={props.disabled}>
      {props.label}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button``;

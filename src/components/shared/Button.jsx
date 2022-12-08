import styled from "styled-components";

/**
 * @onClick 버튼 이벤트 관련
 * @disabled on/off 효과 제어
 * @label 버튼 이름
 * @position absolute, relative, ..
 */
export const Button = (props) => {
  return (
    <ButtonStyle
      width={props.width}
      height={props.height}
      position={props.position}
      onClick={props.onClick}
      disabled={props.disabled}
      top={props.top}
      bottom={props.bottom}
      left={props.left}
      right={props.right}
      margin={props.margin}
      padding={props.padding}
      backgroundColor={props.backgroundColor}
    >
      {props.label}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  position: ${(props) => props.position};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor || `#ffffff`};
`;

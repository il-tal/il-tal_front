import styled from "styled-components";
/**
 * @font 폰트
 * @size 폰트 사이즈
 * @weight 폰트 두께
 * @color 폰트 색상
 * @margin 마진
 * @padding 패딩
 * @display display 속성
 * @place place-items 속성
 * @align align-items 속성
 * @justify justify-content 속성
 * @position position 속성
 * @minHeight min-height 속성
 * @minWidth min-width 속성
 * @lineHeight line-height 속성
 */
export const CTBox = styled.div`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size || `1rem`};
  font-weight: ${(props) => props.weight || 400};
  color: ${(props) => props.color || "#000000"};
  margin: ${(props) => props.margin || 0};
  padding: ${(props) => props.padding || 0};
  display: ${(props) => props.display};
  place-items: ${(props) => props.place};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  position: ${(props) => props.position};
  min-height: ${(props) => props.minHeight};
  min-width: ${(props) => props.minWidth};
  line-height: ${(props) => props.lineHeight};
`;

export const CTSpan = styled.span`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size || `1rem`};
  font-weight: ${(props) => props.weight || 400};
  color: ${(props) => props.color || "#000000"};
  margin: ${(props) => props.margin || 0};
  padding: ${(props) => props.padding || 0};
  display: ${(props) => props.display};
  place-items: ${(props) => props.place};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  position: ${(props) => props.position};
  min-height: ${(props) => props.minHeight};
  min-width: ${(props) => props.minWidth};
  line-height: ${(props) => props.lineHeight};
`;

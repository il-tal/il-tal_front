import styled from "styled-components";

export const DibBox = styled.div`
  min-width: 294px;
  max-width: 294px;
  min-height: 294px;
  max-height: 294px;
  display: grid;
  place-items: center;
  grid-template-rows: 5fr 1fr 1fr;
  margin: 25px;
`;

export const DibImg = styled.img`
  min-width: 294px;
  max-width: 294px;
  min-height: 294px;
  max-height: 294px;
  filter: brightness(50%);
  margin: 0 auto;
  position: absolute;
`;

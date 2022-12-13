import styled from "styled-components";

export const DibBox = styled.div`
  min-width: 294px;
  max-width: 294px;
  min-height: 294px;
  max-height: 294px;
  display: grid;
  border: none;
  place-items: center;
  grid-template-rows: 5fr 1fr 1fr;
  margin: 25px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

export const DibImg = styled.picture`
  min-width: 294px;
  max-width: 294px;
  min-height: 294px;
  max-height: 294px;
  margin: 0 auto;
  position: absolute;
  .dib-Img {
    min-width: 294px;
    max-width: 294px;
    min-height: 294px;
    max-height: 294px;
    border-radius: 8px;
    filter: brightness(50%);
  }
`;

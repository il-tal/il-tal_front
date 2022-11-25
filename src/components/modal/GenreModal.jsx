import styled from "styled-components";

const GenreModal = () => {
  return (
    <GenreBox>
      <div>선호장르</div>
      <TendencyWrap>
        <GenreTag>공포</GenreTag>
        <GenreTag>추리</GenreTag>
        <GenreTag>액션</GenreTag>
        <GenreTag>감성</GenreTag>
        <GenreTag>감성</GenreTag>
        <GenreTag>모험</GenreTag>
        <GenreTag>SF/판타지</GenreTag>
        <GenreTag>야외</GenreTag>
        <GenreTag>문제방</GenreTag>
      </TendencyWrap>
      <div>선호 문제</div>
      <TendencyWrap>
        <GenreTag>추리형</GenreTag>
        <GenreTag>관찰형</GenreTag>
        <GenreTag>넌센스</GenreTag>
      </TendencyWrap>
    </GenreBox>
  );
};

export default GenreModal;

const GenreBox = styled.div`
  width: 500px;
  height: 800px;
`;

const TendencyWrap = styled.div``;

const GenreTag = styled.span`
  padding: 10px 25px;
  border-radius: 25px;
  border: 1px solid;
  display: inline-block;
  margin: 10px;
  background-color: #ababab;
`;

import styled from "styled-components";

const Genre = (props) => {
  return (
    <>
      <GenreBox>{props.genre}</GenreBox>
    </>
  );
};

export default Genre;

const GenreBox = styled.div`
  padding: 10px;
  display: inline-block;
  margin: 5px;
  border: 1px solid #06c387;
  border-radius: 8px;
`;

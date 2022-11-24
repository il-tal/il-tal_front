import styled from "styled-components";

const MyGenre = (props) => {
  return (
    <>
      <GenreBox>{props.genre}</GenreBox>
    </>
  );
};

export default MyGenre;

const GenreBox = styled.div`
  padding: 10px 25px;
  border-radius: 25px;
  border: 1px solid;
  display: inline-block;
  margin: 10px;
  background-color: #ababab;
`;

import { useRecoilState } from "recoil";
import styled from "styled-components";
import { serchState } from "../../api/store";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SerchForm = () => {
  const navigate = useNavigate();
  const [serch, setSerch] = useRecoilState(serchState);
  const [onChange, setOnChange] = useState("");
  const onChangeSerch = (e) => {
    setOnChange(e.target.value);
    if (e.key === "Enter") {
      onSubmitHandler();
    }
  };

  const onSubmitHandler = () => {
    setSerch(onChange);
    navigate("/serch");
  };
  return (
    <Container>
      <Input
        onChange={onChangeSerch}
        placeholder="찾고싶은 업체나 테마를 검색해 보세요"
        onKeyPress={onChangeSerch}
      />
      <button onClick={onSubmitHandler}>
        <BsSearch size="21" />
      </button>
    </Container>
  );
};

export default SerchForm;

const Container = styled.div`
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
const Input = styled.input`
  width: 550px;
  height: 40px;
  font-size: 21px;
  border: none;
  border-bottom: 1px solid gray;
  &:focus {
    outline: none;
  }
`;

import styled from "styled-components";

//SelectBox 컴포넌트
const SelectBox = ({ props, onChangeHandler, name, value }) => {
  //defaultValue에 들어있는 value는 댓글 수정시 원래 쓰여있던 정보가 들어감

  return (
    <Select name={name} onChange={onChangeHandler} value={value}>
      {props.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
  );
};
export default SelectBox;

const Select = styled.select`
  height: 30px;
  width: 100px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

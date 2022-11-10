import styled from "styled-components";

//SelectBox 컴포넌트
const SelectBox = ({ index, onChangeHandler, name }) => {
  return (
    <Select name={name} onChange={onChangeHandler}>
      {index.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
  );
};
export default SelectBox;

const Select = styled.select`
  height: 10px;
  width: 150px;
`;

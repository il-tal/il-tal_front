import styled from "styled-components";

//SelectBox 컴포넌트
const SelectBox = ({ props, onChangeHandler, name }) => {
  return (
    <Select name={name} onChange={onChangeHandler}>
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
  width: 150px;
`;

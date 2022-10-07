import React from "react";
import styled from "styled-components";

const SelectWrapper = styled.select`
  margin-right: 10px;
  padding: 5px;
  height: min-content;
  border: none;
`;

const Option = styled.option``;

const Select = ({ items,defaultValue ,onSelected }) => {
    const selectItemHandler = ({target})=>{
        onSelected(target.value);
    }
  return (
    <SelectWrapper onChange={selectItemHandler}>
      
      {items.map((item,index) => (
        <Option key={index} value={item} defaultValue={defaultValue}>{item}</Option>
      ))}
    </SelectWrapper>
  );
};

export default Select;

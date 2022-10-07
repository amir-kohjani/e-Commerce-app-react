import React from "react";
import { useEffect } from "react";
import { SelectWrapper, Option } from "./styles/selectStyles";

const Select = ({ items, defaultValue, onSelected }) => {
  const selectItemHandler = ({ target }) => {
    onSelected(target.value);
  };

  return (
    <SelectWrapper onChange={selectItemHandler}>
      {items.map((item, index) => (
        <Option key={index} value={item} defaultValue={defaultValue}>
          {item}
        </Option>
      ))}
    </SelectWrapper>
  );
};

export default Select;

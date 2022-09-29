import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  direction: rtl;
  display: flex;
  justify-content: center;
  width: 15rem;
`;

const Wrapper = styled.div`
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;

const Select = styled.select`
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
  font-size: 16px;
`;

const Option = styled.option``;

const Filter = styled.div`
  display: flex;

  margin: 5px 0px;
`;

const FilterText = styled.span`
  text-align: right;
  font-size: 16px;
  font-weight: normal;
  margin: 5px;
  width: 100%;
`;
const SubmitBtn = styled.button`
  width: 100%;
  background-color: #e94560;
  color: #fff;
  font-size: 20px;
  font-weight: normal;
  border: none;
  border-radius: 10px;
`;
const FilterContainerMobile = ({ onSubmit }) => {
  const [filterProp, setFilterProp] = useState({});

  const onSubmitHandler = () => {
    onSubmit(filterProp);
    setFilterProp({});
  };

  const onChangeColorFilter = (e) => {
    setFilterProp({ ...filterProp, color: e.target.value });
  };

  const onChangeSizesFilter = (e) => {
    setFilterProp({ ...filterProp, size: e.target.value });
  };

  const onChangeSorter = (e) => {
    setFilterProp({ ...filterProp, sorter: e.target.value });
  };
  return (
    <Container>
      <Wrapper>
        <FilterText>فیلتر</FilterText>
        <Filter>
          <Select onChange={(e) => onChangeColorFilter(e)}>
            <Option disabled selected>
              رنگ
            </Option>
            <Option>سفید</Option>
            <Option>سیاه</Option>
            <Option>قرمز</Option>
            <Option>آبی</Option>
            <Option>زرد</Option>
            <Option>سبز</Option>
          </Select>
          <Select onChange={onChangeSizesFilter}>
            <Option disabled selected>
              سایز
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <FilterText>مرتب سازی</FilterText>
        <Filter>
          <Select onChange={onChangeSorter}>
            <Option selected>جدیدترین</Option>
            <Option>قیمت (سعودی)</Option>
            <Option>قیمت (نزولی)</Option>
          </Select>
        </Filter>
        <SubmitBtn onClick={onSubmitHandler}>اعمال فیلتر</SubmitBtn>
      </Wrapper>
    </Container>
  );
};

export default FilterContainerMobile;

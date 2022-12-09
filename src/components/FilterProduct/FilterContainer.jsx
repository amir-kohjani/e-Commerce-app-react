import { useState } from "react";
import styled from "styled-components";
import useMobileMode from "../../hooks/useMobileMode";
const Container = styled.div`
  direction: rtl;
  display: flex;
  position:${props=>props.mobile ? '' :"sticky"} ;
  bottom: auto;
  top: ${props=>props.mobile ? '' :"100px"};
  z-index: 3;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  justify-content:${props=>props.mobile ? 'center' :"end"};
  align-items: ${props=>props.mobile ? 'center' :"start"};
  flex-direction: column;
  margin:${props=>props.mobile ? '10px' :""};
`;

const Select = styled.select`
  padding: 5px;
  margin: ${props=>props.mobile ? "10px" :"5px"};
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
  padding:5px;
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
const FilterContainer = ({ onSubmit }) => {
  const [scrolled, setScrolled] = useState(false);
  const [filterProp, setFilterProp] = useState();

  const mobileMode = useMobileMode();

  window.addEventListener("scroll", function () {
    window.scrollY > 100 ? setScrolled(true) : setScrolled(false);
  });

  const onSubmitHandler = () => {
    if (
      filterProp?.color != "default" ||
      filterProp?.size != "default" ||
      filterProp?.sort != "default"||
      !filterProp
    ) {
      onSubmit(filterProp);
      setFilterProp({ });
    }
  };

  const onChangeColorFilter = (e) => {

    if (e.target.value !== "default")
      setFilterProp({ ...filterProp, color: e.target.value });
  };

  const onChangeSizesFilter = (e) => {
  
    if (e.target.value !== "default")
      setFilterProp({ ...filterProp, size: e.target.value });
  };

  const onChangeSorterFilter = (e) => {

    if (e.target.value !== "default")
      setFilterProp({ ...filterProp, sort: e.target.value });
  };

  return (
    <Container scrolled={scrolled} mobile={mobileMode}>
      <Wrapper mobile={mobileMode}>
        <FilterText>فیلتر</FilterText>
        <Filter>
          <Select onChange={onChangeColorFilter} value={filterProp?.color ? filterProp?.color :"default"} mobile={mobileMode}>
            <Option value="default" disabled selected>
              رنگ
            </Option>
            <Option value='سفید'>سفید</Option>
            <Option value="سیاه">سیاه</Option>
            <Option  value="آبی قرمز">آبی قرمز</Option>
            <Option value="آبی">آبی</Option>
            <Option value="زرد">زرد</Option>
            <Option value="سبز">سبز</Option>
          </Select>
          <Select onChange={onChangeSizesFilter} value={filterProp?.size ? filterProp?.size :"default"} mobile={mobileMode}>
            <Option value="default" disabled selected>
              سایز
            </Option>
            <Option value="xs">XS</Option>
            <Option value="s">S</Option>
            <Option value="m">M</Option>
            <Option value="l">L</Option>
            <Option value="xl">XL</Option>
          </Select>
        </Filter>
        <FilterText>مرتب سازی</FilterText>
        <Filter>
          <Select onChange={onChangeSorterFilter} value={filterProp?.sort ? filterProp?.sort :"default"} mobile={mobileMode}>
            <Option value="default" selected disabled>
              مرتب سازی{" "}
            </Option>
            <Option value={" updated: -1 "} selected>
              جدیدترین
            </Option>
            <Option value={" price: -1" }>قیمت (سعودی)</Option>
            <Option value={" price: 1" }>قیمت (نزولی)</Option>
          </Select>
        </Filter>
        <SubmitBtn onClick={onSubmitHandler}>اعمال فیلتر</SubmitBtn>
      </Wrapper>
    </Container>
  );
};

export default FilterContainer;

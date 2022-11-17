import { useState } from "react"
import styled from "styled-components"
import {mobile} from '../../responsive'
const Container = styled.div`
direction: rtl;
display: flex;
position: sticky;
bottom: auto;
top:100px;
z-index:3;

`

const Wrapper = styled.div`
    width: fit-content;
    display: flex;
    justify-content:end;
    align-items:end;
    flex-direction: column;
`

const Select = styled.select`
padding: 5px;
margin-right: 5px;
border-radius:10px;
font-size: 16px;
${mobile({ margin: "10px 0px" })}
`

const Option = styled.option``


const Filter = styled.div`
display: flex;
margin:5px 0px;

${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`

const FilterText = styled.span`
text-align:right;
font-size:16px;
font-weight: normal;
margin: 5px;
${mobile({ marginRight: "0px" })}
`
const SubmitBtn = styled.button`
    width:100%;
    background-color: #e94560;
    color: #fff;
    font-size: 20px;
    font-weight:normal;
    border: none;
    border-radius:10px;

`
const FilterContainer = ({onSubmit}) => {
    const [scrolled, setScrolled] = useState(false)
    const [filterProp, setFilterProp] = useState({});

    window.addEventListener("scroll", function () {
        window.scrollY > 100 ? setScrolled(true) : setScrolled(false);
      });

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
  
    const onChangeSorterFilter = (e) => {
      setFilterProp({ ...filterProp, sorter: e.target.value });
    };

    return (
        <Container scrolled={scrolled}>
            <Wrapper>
                <FilterText>فیلتر</FilterText>
                <Filter >

                    <Select onChange={onChangeColorFilter} value={filterProp.color}>
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
                    <Select onChange={onChangeSizesFilter} value={filterProp.size}>
                        <Option disabled selected >
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

                    <Select onChange={onChangeSorterFilter}>
                        <Option selected>جدیدترین</Option>
                        <Option>قیمت (سعودی)</Option>
                        <Option>قیمت (نزولی)</Option>
                    </Select>
                </Filter>
                <SubmitBtn onClick={onSubmitHandler}>اعمال فیلتر</SubmitBtn>
            </Wrapper>
        </Container>
    )
}

export default FilterContainer
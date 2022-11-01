import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { Container, SearchBox, Title, Wrapper } from './styles/mobileSearch'
import Header from '../../components/Header/Header';
import {categories} from '../../data'
import CategoriesItem from './CategoriesItem';

const MobileSearch = () => {
  const [items,setItems]= useState(categories)
  return (
    <>
   
    <Container>
        <SearchBox>
        <i>
            <SearchIcon fontSize="large" />
          </i>
          <input placeholder="جستجو میان تمامی کالاها..." />
        </SearchBox>
        <Title>
          دسته بندی ها
        </Title>
        <Wrapper>
          {items.map(item=>(
            <CategoriesItem title={item.title} img={item.img} to={item.to} key={item.id}/>
          ))}
        </Wrapper>
    </Container>
    </>
  )
}

export default MobileSearch
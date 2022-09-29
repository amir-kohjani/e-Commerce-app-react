import React from 'react'
import { ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons'
import { Badge, Avatar } from 'antd';

import styled from 'styled-components'
import CartIcon from './CartIcon';


const Container = styled.div`
    height:60px;
 
`
const Wrapper = styled.div`
  padding: 10px ;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Searchcontainer = styled.div`
  border: none;
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin-left: 25px;
  width: 50%;
  
  
`
const Input = styled.input`
background-color:#3e414153;
color:black;
border:none;
height: 40px;
width:100%;
line-height:5;
border: 0.5px solid lightgray;
border-radius: 10px;
font-Size: 16px;
`
const Lang = styled.span`
  font-size: 14px;
  cursor:pointer;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
font-weight: bold;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content:flex-end;
`
const MenuItem = styled.div`
  position: relative;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (

    <Container>
      <Wrapper>
        <Left>
         
          <Searchcontainer>

            <Input placeholder="Search In Products..." />
            <SearchOutlined style={{marginLeft:'3px',cursor:'pointer',fontSize:'25px' }}/>

          </Searchcontainer>
        </Left>
        <Center>
          <Logo>Logo</Logo>
        </Center>
        <Right>
          <MenuItem>
            REGISTER
          </MenuItem>
          <MenuItem>
            SIGN IN
          </MenuItem>
          <MenuItem>
            {/* <Badge count={50}>

              <ShoppingCartOutlined style={{ fontSize: '25px', color: 'gray' }} />
            </Badge> */}
            <CartIcon  />
          </MenuItem>
        </Right>
      </Wrapper>

    </Container>
  )
}

export default Navbar
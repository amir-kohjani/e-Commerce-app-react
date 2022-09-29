import styled from "styled-components"
import {mobile} from '../responsive'
const Container = styled.div`
overflow: hidden;
background-color: #333;
`
const NavLink = styled.a`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  &:hover{
    background-color: #ddd;
    color: black;
  }
  &:active{
    background-color: #04AA6D;
    color: white;
  }
  
`




const NavbarResponsive = () => {
    return (
        <div>NavbarResponsive</div>
    )
}

export default NavbarResponsive
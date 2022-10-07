import styled from "styled-components";
import { mobile } from "../../../responsive";


export const Header = styled.div`
  height: 5vh;
display: flex;
align-items: center;
justify-content:start;
  ${mobile({
    height: "8vh",
  })}
  .link {
    ${mobile({
      display: "none",
    })}
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 90%;
  margin: auto;
  padding: 12px;
  max-height: 20%;
`;

export const Menu = styled.div`
direction: rtl;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Links = styled.ul`
direction: rtl;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  line-height: 8vh;

  li {
    list-style: none;
    margin-left: 30px;
    display: inline-block;
    &:hover {
      transition: 0.2s;
      color: #ff014f;
    }
    a{
      line-height: 25px;
    font-size: 15px;
    padding: 20px 16px;
    position: relative;
    display: inline-block;
    color: black;
    font-weight: bold;
      &::before {
        content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top:34px;
    background-color: black;
  

      }
    }

    ${mobile({
      width: "100%",
      transition: "all 0.5s ease-in-out",
      textTransform: "uppercase",
      lineHeight: "70px",
    })}
  }

  ${mobile({
    display: "none",
  })}
  ${(props) =>
    props.mobile
      ? mobile({
          paddingTop: "30px",
          position: "fixed",
          display: "block",
          listStyle: "none",
          boxShadow:
            "rgba(50, 50, 93, 0.23) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          right: "0",
          left: "auto",
          top: "0",
          transition: "all 0.5s ease-in-out",
          width: "60%",
          height: "100vh",
          backgroundColor: "white",
          zIndex: "8000",
        })
      : ""}
`;

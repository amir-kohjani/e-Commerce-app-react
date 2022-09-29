import styled from "styled-components";
const Search = styled.div`
    padding: 20px 0;
    ${props => props.active ? {
    height: '12vh',
    position: 'fixed',
    top: '0',
    zIndex: '1000',
    width: '100%',
    backgroundColor: '#fff',
    boxShadow: ' -1px 11px 24px -11px rgba(0, 0, 0, 0.2)',
    transition: '0.5s'
  } : ''
  }
`

const SearchLogo = styled.div``

const ImageLogo = styled.img`
  width: auto;
  height: auto;
`
const Width = styled.div`
  width: 20%;
`

const SearchBox = styled.div`
  width: 80%;
  border: 2px solid rgba(0, 0, 0, 0.1);
  /*padding: 10px;*/
  border-radius: 50px;
  i {
  width: 5%;
  text-align: center;
  font-size: 20px;
  opacity: 0.5;
  padding: 15px 20px;
  font-size: 17px;
}
input {
  width: 100%;
  padding: 10px;
}
span {
  width: 20%;
  opacity: 0.5;
  border-left: 2px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
}
`
const Fflex = styled.div`
    justify-content:end;
`

const Cart = styled.div`
  position: relative;
  span {
  position: absolute;
  top: -10px;
  right: 0px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  background-color: #e94560;
  font-size: 12px;
  color: #fff;
}
`

const Categories = styled.div`
  background-color: #f6f9fc;
  padding: 0px 30px;
  border-radius: 5px;
  height: 6vh;
  margin-top: 5px;
  span {
  margin-right: 20px;
  font-size: 30px;
  margin-top: 10px;
}
h4 {
  font-weight: 500;
  margin-top: 12px;
}
h4 i {
  margin-left: 10px;
}
`

const Header = styled.header`
  height: 8vh;
  box-shadow: -1px 15px 17px -8px rgba(0, 0, 0, 0.1);
  ul {
  line-height: 8vh;
}
ul li {
  margin-left: 30px;
}
ul li a {
  transition: 0.5s;
  font-size: 15px;
  font-weight: 400;
}
ul li a:hover {
  color: #ff014f;
}
`
export { Heade, Search, SearchBox, SearchLogo, ImageLogo, Width, Fflex, Cart, Categories, Header }

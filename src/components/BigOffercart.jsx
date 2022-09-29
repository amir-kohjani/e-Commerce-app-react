import styled from "styled-components"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { mobile } from "../responsive";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    max-width: 80%;
    width: 240px;
    background: #f5fbfd;
    padding: 20px;
    position: relative;
    border-radius: 8px;
    
    /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10pxs 0 rgba(0, 0, 0, 0.19); */
    margin: 0 10px;
    ${mobile({ 
      width: '360px',
      marginLeft :'10px',
      marginRight:'20px'
   })}
`

const ImageContainer = styled.a`
 width: 100%;
  max-height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Discount = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background: #e94560;
  padding: 3px 10px;
  font-size: 16px;
  font-weight:bold;
  border-radius: 50px;
  color: #fff;
  margin: 10px;
`
const Image = styled.img`
    width: 100%;
    object-fit: cover;
    
`

const NameProduct = styled.h4`
    font-weight: 400;
`

const Pricewrapper = styled.div``

const Price = styled.span`
    color: #e94560;
    font-size: 20px;
    font-weight: 500;
    text-decoration:  ${(props)=> props.discount &&'line-through'};
    

`
const BigOffercart = ({index,item}) => {
  return (
    <Container key={index}>
    <ImageContainer>
   {item.discount && <Discount>{item.discount} %OFF</Discount>}
        <Image src={item.cover} />
    </ImageContainer>
    <NameProduct>{item.name}</NameProduct>
    <Pricewrapper>
         <Price discount={item.discount} >${item.price} </Price>
         {item.discount && <Price> <ArrowRightAltIcon/> ${item.price -(item.price * item.discount)/100}</Price>}
    </Pricewrapper>
   
</Container>
  )
}

export default BigOffercart
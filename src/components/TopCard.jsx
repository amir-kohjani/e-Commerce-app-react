import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    background: #f5fbfd;
  padding: 20px;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  margin: 10px;

`

const NameTop = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    &span{
      
}
`
const Tleft = styled.span`
  background: #e94560;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        padding: 5px 10px;
        border-radius: 50px;
        margin: 5px;
        position: absolute;
  top: 10px;
    left: 0;
`
const Tright = styled.span`
  font-size: 12px;
        padding: 5px 10px;
        border-radius: 50px;
        margin: 5px;
      
  top: 10px;
    background-color: #f0edd9;
  color: black;
  position: absolute;
  right: 0;
`
const ImageContainer = styled.div``

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
`
const TopCard = ({item,index}) => {
    return (
        <Container key={index}>
            <NameTop>
                <Tleft>{item.para}</Tleft>
                <Tright>{item.desc}</Tright>
            </NameTop>
            <ImageContainer>
                <Image src={item.cover} alt=''/>
            </ImageContainer>
        </Container>
    )
}

export default TopCard
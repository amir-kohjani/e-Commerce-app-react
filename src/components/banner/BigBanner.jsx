import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    flex:3;
    
`
const Box = styled.div`
width: 100%;
height:350px;
min-width:450px;

`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 10px;
`


function BigBanner({img}) {
 
  return (
    <Container>
      <Box>
        <Image  src={img}/>
      </Box>
    </Container>
  )
}

export default BigBanner
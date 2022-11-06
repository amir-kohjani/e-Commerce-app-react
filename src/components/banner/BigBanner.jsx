import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    
    padding: 10px;
    
`
const Box = styled.div`
width: 950px;
height:350px;

`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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
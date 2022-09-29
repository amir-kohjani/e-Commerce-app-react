import React from "react";
import styled from "styled-components";


const Container = styled.div`
    
    padding: 10px;
    margin: 10px;
`
const Box = styled.div`
width: 420px;
height:350px;

`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

function SmallBanner({img}) {
  return (
    <Container>
      <Box>
        <Image src={img} />
      </Box>
    </Container>
  );
}

export default SmallBanner;

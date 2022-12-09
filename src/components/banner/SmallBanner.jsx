import React from "react";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    flex:1;
`
const Box = styled.div`
width: 420px;
height:350px;


`
const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
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

import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    height:3rem;
    display: flex;
    justify-content: end;
`

const BackBtn = styled.button`
border: none;
font-size: 18pt;
background-color:transparent;
margin: 10px;
`
const GoBackHeader = () => {
    const navigate = useNavigate();
   
  
  return (
    <Container>
        <BackBtn className="back-label" onClick={()=>navigate(-1)}></BackBtn>
    </Container>
  )
}

export default GoBackHeader
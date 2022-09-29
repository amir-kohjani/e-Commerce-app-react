import styled from 'styled-components'

export const Container =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  
    padding: 20px 10px;
    border-radius: 50%;
    
`



export const ImageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
margin: 10px;
min-width: 380px;

flex: 1;
`

export const Image = styled.img`
width: 100%;
object-fit: cover;
    border-radius: 16px;
`


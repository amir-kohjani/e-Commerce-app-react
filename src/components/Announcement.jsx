import styled from "styled-components"
const Container  = styled.div`
    height: 30px;
    background-color:teal;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    font-size:16px;
    font-weight:bold;
    padding:5px;
`
const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shopping on Orders Over $50!
    </Container>
  )
}

export default Announcement
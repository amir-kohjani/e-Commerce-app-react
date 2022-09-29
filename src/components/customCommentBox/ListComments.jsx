import { Divider } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Title = styled.h2`
    font-size: 25px;
    font-weight: bold;
`

const Container = styled.div`
    padding: 50px;
`

const Wrapper = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
justify-content:start;
/* max-width:50rem; */
`
const ListComments = ({comments}) => {
  return (
    <Container>
    <Title>Commments : </Title>
    <Divider />
    <Wrapper>
        {comments && comments.map((comment) =>( <Comment data={comment}/>))}
           
    </Wrapper>

    </Container>
    
  )
}

export default ListComments
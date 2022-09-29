import React from 'react'
import styled from 'styled-components'
import AddComment from './AddComment'
import ListComments from './ListComments'


const Container = styled.div`
display: flex;
padding: 10px;
flex-direction: column;
`

const WrapperList = styled.div`

`

const WrapperAddComment = styled.div``




const CommentBox = ({comments}) => {
  return (
    <Container>
        <WrapperList>
        <ListComments comments={comments}/>
        </WrapperList>
        <WrapperAddComment>
            <AddComment/>
        </WrapperAddComment>
    </Container>
  )
}

export default CommentBox
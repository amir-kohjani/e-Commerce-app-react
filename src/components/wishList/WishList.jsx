import React from 'react'
import { Container,EmpetyWrapper,EmpetyIcon,Title } from './styles/wishListStyles'

const WishList = ({items=[],oClose,wishSubmit}) => {


if(items.length==0){
    return (
        <Container>
        <EmpetyWrapper>
          <EmpetyIcon className="heart-label" />
          <Title>لیست علاقه مندی های شما خالی میباشد!</Title>
        </EmpetyWrapper>
      </Container>
    )
}


  return (
    <div>WishListPage</div>
  )
}

export default WishList
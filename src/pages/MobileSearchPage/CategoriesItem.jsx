import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Image, Title, TitleWrapper } from './styles/categoriesItemStyles'

const CategoriesItem = ({to,title,img}) => {
  return (
    <Container>
        <Link to={to}>
            <TitleWrapper>
                <Title>{title}</Title>
            </TitleWrapper>
            <Image src={img}/>
        </Link>
    </Container>
  )
}

export default CategoriesItem
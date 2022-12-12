import React from 'react'
import { Circle, CircleTitle, Col, ColTitle, Container, Count, Header, Title, Wrapper } from './styles/myOrdersStyles'

const MyOrders = ({orders}) => {
  return (
    <Container>
        <Header>
            <Title>سفارشات شما</Title>
        </Header>
        <Wrapper>
            <Col>
            <Circle>
                <Count>{orders?.count || 0}</Count>
                <CircleTitle>سفارش</CircleTitle>
            </Circle>
            <ColTitle>چندتا سفارش داشتم؟</ColTitle>
            </Col>
            <Col>
            <Circle>
                <Count>{orders?.returned || 0}</Count>
                <CircleTitle>مرجوعی</CircleTitle>
            </Circle>
            <ColTitle>چندتا سفارش مرجوعی داشتم ؟</ColTitle>
            </Col>
            <Col>
            <Circle>
                <Count>{orders?.notDelivered || 0}</Count>
                <CircleTitle>تحویل نشده</CircleTitle>
            </Circle>
            <ColTitle>چندتا سفارش تحویل نگرفتم؟</ColTitle>
            </Col>
        </Wrapper>
    </Container>
  )
}

export default MyOrders
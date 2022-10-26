import React from 'react'
import PN from "persian-number"
import { Amount, Container, CostItem, CostSummary, ShippingSummary, Title } from './styles/paymentDescription'

const PaymentDescription = ({address ,amounts}) => {
  return (
    <Container>
        <ShippingSummary>
            این سفارش توسط 
            <b>{" "+address.name + " " + address.lastName+" "}</b>
              در آدرس  
             <b>{" "+address.province_name + " " + address.postAddress+" "}</b> 
             دریافت میگردد
        </ShippingSummary>

        <CostSummary>
            <CostItem>
                <Title>مبلغ کل خرید:</Title>
                <Amount className='price-label' >{PN.convertEnToPe(160000)}</Amount>
            </CostItem>
            <CostItem>
                <Title> هزینه ارسال،بیمه و بسته بندی:</Title>
                <Amount className='price-label' >{PN.convertEnToPe(0)}</Amount>
            </CostItem>
            <CostItem color>
                <Title> تخفیف :</Title>
                <Amount className='price-label' >{PN.convertEnToPe(0)}</Amount>
            </CostItem>
            <CostItem borderTop>
                <Title bold> مبلغ قابل پرداخت :</Title>
                <Amount className='price-label' bold >{PN.convertEnToPe(160000)}</Amount>
            </CostItem>

        </CostSummary>
    </Container>
  )
}

export default PaymentDescription
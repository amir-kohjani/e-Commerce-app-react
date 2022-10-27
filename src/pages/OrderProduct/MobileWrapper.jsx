import React, { useState } from 'react'
import styled from 'styled-components';
import DialogCart from '../../components/order/Cart/DialogCart';
import PaymentInformation from '../../components/order/PaymentInforamtion/PaymentInformation';
import ShippingIformation from '../../components/order/ShippingIformation/ShippingIformation';


import {popularProducts} from '../../data'

const Container = styled.div`

height: 100%;
`

const MobileWrapper = ({user,items}) => {
  const [step,setStep] = useState(0); 
  const [typeOfPayment,setTypeOfPayment] = useState({});
  const [address,setAddress] = useState({});
  const [typeOfSendding,setTypeOfSendding] =useState('');
console.log(items)

  const submitShippingIformationHanlder = (info)=>{
    setAddress(info.addressIndex);
    setTypeOfSendding(info.senddingIndex);
    nextStepHandler();
    }
      const typeOfPaymentHandler = (type)=>{
    setTypeOfPayment(type)
      }

      const cartHandler = (cart)=>{
nextStepHandler();
      }
      const nextStepHandler = ()=>{
        setStep(prev=>prev+1);
      }
      const previousStepHandler = ()=>{
        setStep(prev=>prev--);
      }
  return (
    <Container>
  {step==0 ?<DialogCart  items={items} cartSubmit={cartHandler} /> :null}
  {step==1?  <ShippingIformation address={user.address}  submitInfo={submitShippingIformationHanlder}/> :null}
{step==2?<PaymentInformation cartItems={items} typeOfPayment={typeOfPaymentHandler} address={address}/>:null}
    </Container>
  )
}

export default MobileWrapper
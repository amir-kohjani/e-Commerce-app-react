import React,{useState} from 'react'
import styled from 'styled-components'
import PaymentGateway from '../../components/order/PaymentGateway/PaymentGateway'
import PaymentInformation from '../../components/order/PaymentInforamtion/PaymentInformation'
import ShippingIformation from '../../components/order/ShippingIformation/ShippingIformation'


const Container = styled.div``


const DesktopWrapper = ({user,items}) => {
  const [step,setStep] = useState(0); 
  const [typeOfPayment,setTypeOfPayment] = useState({});
  const [address,setAddress] = useState({});
  const [typeOfSendding,setTypeOfSendding] =useState('');
const submitShippingIformationHanlder = (info)=>{
setAddress(info.addressIndex);
setTypeOfSendding(info.senddingIndex);
nextStepHandler();
}
  const typeOfPaymentHandler = (type)=>{
setTypeOfPayment(type)
  }
  const nextStepHandler = ()=>{
    setStep(prev=>prev+1);
  }
  const previousStepHandler = ()=>{
    setStep(prev=>prev--);
  }
  return (
   <Container>
    {step==0 &&
    <ShippingIformation address={user.address}  submitInfo={submitShippingIformationHanlder}/>}

    {step==1&&
    <PaymentInformation cartItems={items} typeOfPayment={typeOfPaymentHandler} address={address} />
    }
    {step==2&&<PaymentGateway amount={160000}  typeOfPayment={typeOfPayment}/>}

   </Container>
  )
}

export default DesktopWrapper
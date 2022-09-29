import React from 'react'
import styled from 'styled-components'
import ShippingIformation from '../../components/order/ShippingIformation/ShippingIformation'


const Container = styled.div``


const DesktopWrapper = ({user}) => {
  
  return (
   <Container>
    <ShippingIformation address={user.address}/>

   </Container>
  )
}

export default DesktopWrapper
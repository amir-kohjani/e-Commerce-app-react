import React from 'react'
import AddressMethod from '../order/ShippingIformation/AddressMethod'
import { Container } from './styles/addressListStyles'

const AddressList = ({address}) => {
  return (
    <Container>
            <AddressMethod address={address}  />
    </Container>
  )
}

export default AddressList
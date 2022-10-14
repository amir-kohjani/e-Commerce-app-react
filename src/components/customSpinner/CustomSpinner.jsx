import { pink } from '@mui/material/colors'
import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import {Container} from './styles/customSpinnerStyle'
const CustomSpinner = () => {
  return (
    <Container>
        <ThreeDots
                height="80" 
                width="80" 
                radius="9"
                color={ pink[500]}
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
    </Container>
  )
}

export default CustomSpinner
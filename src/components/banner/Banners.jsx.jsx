import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive'
import BigBanner from './BigBanner'
import SmallBanner from './SmallBanner'


const Container = styled.div`
display: flex;
justify-content:center;
align-items: center;
${mobile({
  display: 'none'
})}
`


const Banners = ({smallBanner,bigBanner}) => {
  return (
    <Container>
      <SmallBanner img={smallBanner}/>
      <BigBanner img={bigBanner}/>
    </Container>
  )
}

export default Banners
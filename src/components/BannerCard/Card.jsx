import React from 'react'
import styled from 'styled-components'

import {ImageContainer , Image } from './style'

const Card = ({ImageSrc}) => {
  
  return (
    <ImageContainer>
        <Image src={ImageSrc}/>
    </ImageContainer>
  )
}

export default Card
import { LikeFilled } from '@ant-design/icons'
import { Divider } from '@mui/material'
import { Rate } from 'antd'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
`

const Header = styled.div`
    display: flex;
    align-items: center;

`

const Date = styled.div`
margin:  0px 10px;
`

const Username = styled.p`
margin: 10px 10px;
`

const RateTitle = styled.h3`
font-size: 16px;
color : #${prop => prop.color};
`

 const Content = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
` 

 const CustomDivider = styled.hr`
    width: 50%;
    border: 0.1 solid gray;
 `

const Comment = ({ data }) => {

    return (
        <>
            <Container>
                <Header>
                    <Rate disabled allowHalf defaultValue={data.rate}  />
                    <Username>{data.username}</Username>
                    <Date>{data.date}</Date>
                </Header>
               
                <RateTitle color='10554e'>{data.rateTitle}</RateTitle>
                <Content>
                    <p>
                        {data.content}
                    </p>

                </Content>

            </Container>
            <CustomDivider/>
            {/* <Divider />  */}

        </>
    )
}

export default Comment
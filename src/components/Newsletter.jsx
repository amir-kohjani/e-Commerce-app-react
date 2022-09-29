import { SendOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
        height: fit-content;
    background-color:none;
    display:flex;
    justify-content:center;

   
`
const Wrapper = styled.div`
    display: flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    margin: 10px 0px ;
    padding: 10px;
    /* background-color:#e94560; */
    background-color:#fdc424;
    border: solid 0.5 gray;
    border-radius:30px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    width: 80%;
    ${mobile({width:"90%",borderRadius:0})}
`
const Title = styled.h1`
    font-size: 24pt;
    color:white;
    margin-bottom: 20px;
    letter-spacing:1px;
    ${mobile({fontSize:"24pt",margin:'10px'})}
`
const Description = styled.div`
    font-size:24px;
    color:white;
    font-weight: 300;
    margin-bottom: 20px;
    letter-spacing: 1px;
    text-align: center;
    ${mobile({fontSize:"18px",padding:'0px 10px'})}
`

const InputContainer = styled.div`
    width:20%;
    height:40px;
    background-color:white;
    display: flex;
    justify-content:space-between;
    border: none;
    border-radius: 10px;
    ${mobile({width:'80%'})}
`
const Input = styled.input`
    width: 100%;
    font-size: 20px;
    outline: none;
    letter-spacing:1px;
    border: none;
    border-radius: 10px;
    ${mobile({fontSize:'18px'})}

`
const Button = styled.button`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e94560;
    font-size: 24px;
    background-color:#fcf5f5;
    cursor: pointer;
    border-radius: 10px;
`

const Newsletter = () => {
    return (
        <Container>
            <Wrapper>
            <Title>خبرنامه ما</Title>
            <Description>! شماه تلفنتو اینجا بزار تا از جدیدترین محصولاتمون خبرت کنیم</Description>
            <InputContainer>
                <Input placeholder='09.....'/>
                <Button>
                    <SendOutlined />
                </Button>
            </InputContainer>
            </Wrapper>
        </Container>
    )
}

export default Newsletter
import { FacebookOutlined, HomeOutlined, InstagramOutlined, MailOutlined, PhoneOutlined, TwitterOutlined, WhatsAppOutlined } from "@ant-design/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
direction: rtl;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color:#fff8dc;
    
`
const Left = styled.div`

    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    min-width: 280px;
`
const Logo = styled.h1`

`
const Description = styled.p`
    font-size: 10pt;
    line-height: 32px;
    font-weight: 500;
    margin-bottom: 0;
    text-align: right;
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
    
    ${mobile({justifyContent:"center"})}
`
const SocialIcon = styled.div`
    width: 80px;
    height: 80px;
    border-radius:50%;
    color: white;
    background-color:#${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    font-size: 35px;
    &:hover{
        transition:0.5s;
        transform: translateY(-10px);
    }
    ${mobile({fontSize:'25px',
    width:'40px',
    height:'40px',
    marginBottom: '50px'
    })}
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    min-width: 280px;
`
const Title = styled.h3`
text-align: right;
color:#808080;
    margin-bottom: 30px;
`

const List = styled.ul`
text-align: right;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover{
        color:#e94560;
    }
`

const Right = styled.div`
  flex: 1;
  padding: 20px;

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


const Footer = () => {
    return (
        <Container>
            <Left>
                
                <Title>Contact</Title>
                <ContactItem>
                    <HomeOutlined style={{ marginRight: "10px" }} /> 622 Dixie Path , South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <PhoneOutlined style={{ marginRight: "10px" }} /> +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutlined style={{ marginRight: "10px" }} /> contact@lama.dev
                </ContactItem>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
            <Logo>LOGO.</Logo>
                <Description>
                    توضیحاتی درباره شرکت ،از تاسیس تا اکنون.
                    سیاست های راه بردی،و سایر توضیحات لازم
                </Description>
                <SocialContainer>
                    <SocialIcon color="3d7bff">
                        <TwitterOutlined />
                    </SocialIcon>
                    <SocialIcon color="ff0067">
                        <InstagramOutlined />
                    </SocialIcon>
                    <SocialIcon color="1a9513">
                        <WhatsAppOutlined />
                    </SocialIcon>
                </SocialContainer>
            </Right>
        </Container>
    )
}

export default Footer
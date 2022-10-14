import { FacebookOutlined, HomeOutlined, InstagramOutlined, MailOutlined, PhoneOutlined, TwitterOutlined, WhatsAppOutlined } from "@ant-design/icons"
import PN  from 'persian-number'

import {
    Container,
Logo,
ImageLogo,
Left,
Description,
SocialContainer,
SocialIcon,
Center,
Title,
List,
ListItem,
Right,
ContactItem,
Home,
ContentUs
} from './styles/FooterStyles'
import logo from "../assets/images/logo.svg";


const Footer = () => {
    return (
        <Container>
            <Logo>
        <ImageLogo src={logo}/>
    </Logo>
    <Description>
            توضیحاتی درباره شرکت ،از تاسیس تا اکنون.
            سیاست های راه بردی،و سایر توضیحات لازم
        </Description>
        <ContentUs>
    <ContactItem>
          مشهد,خیابان اول , سمت راست 
    </ContactItem>
    <ContactItem>
    {PN.convertEnToPe(' 09366690202 | 05132730100')}   
    </ContactItem>
    <ContactItem>
         amir.kohjani20@gamil.com
    </ContactItem>
                
            
        </ContentUs>
        </Container>
    )
}

export default Footer
    {/* <Right>
    
        
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
    <Left>
        
        <Title>ارتباط با ما</Title>
    
           
           
           
        </ContactItem>
        <ContactItem>
            
           +1 234 56 78
            
        </ContactItem>
        <ContactItem>
            <span >contact@lama.dev</span>
           
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
    </Center> */} 
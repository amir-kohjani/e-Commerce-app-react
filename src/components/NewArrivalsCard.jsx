import styled from "styled-components"
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { ArrowRight } from "@mui/icons-material";

const Container = styled.div`
    position: relative;
    padding: 50px;
`
const Header = styled.div`
    display: flex;
    justify-content:space-between;
`

const HeaderLeft = styled.div`
    display: flex;
    align-items:center;
    width: 50%;
`

const HeaderRight = styled.div`
    display: flex;
    align-items:center;
    color: grey;
`

const Icon = styled.div`
    font-size: 40px;
    color: #e94560;
    margin: 10px;
`

const Title = styled.h1`
        font-size: 25px;
        margin: 5px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: #f5fbfd;
    padding: 20px;
    
    border-radius: 8px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    margin: 10px;
`

const Box = styled.div`
display: flex;
flex-direction: column;

`

const ImageContainer = styled.div`

  max-height: 270px;
  max-width:280px;
 
`

const Image = styled.img`
    
    object-fit: cover;
    
`

const NameProduct = styled.h4`
    font-weight: 400;
`

const Price = styled.span`
    color: #e94560;
    font-size: 20px;
    font-weight: 500;

`


const NewArrivalsCard = ({ values }) => {
    return (
        <Container>
            <Header>
                <HeaderLeft>
                    <Icon><NewReleasesIcon style={{fontSize: '45px'}}/></Icon>
                    <Title>NewArrivals</Title>
                </HeaderLeft>
                <HeaderRight>
                    <span>View All</span>
                    <ArrowRight />
                </HeaderRight>
            </Header>
            <Wrapper>

                {
                    values.map((item, index) => {
                        return (
                            <Box key={index}>
                                <ImageContainer>
                                    <Image src={item.cover} />
                                </ImageContainer>
                                <NameProduct>{item.name}</NameProduct>
                                <Price>${item.price}</Price>
                            </Box>
                        )
                    })
                }
            </Wrapper>
        </Container>
    )
}

export default NewArrivalsCard
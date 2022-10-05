import PN from "persian-number";
import {
  Container,
  Image,
  ImageWrapper,
  Discount,
  Details,
  Description,
  NameProduct,
  Price,
  Pricewrapper,

} from "./styles/styles";
const Product = ({ item }) => {
  return (
    <a>
      <Container>
        <ImageWrapper>
          {/* <Circle /> */}
          <Discount>{PN.convertEnToPe(item.discount)}</Discount>
          <Image src={item.img} />
        </ImageWrapper>
        <Details>
          <NameProduct>{item.title}</NameProduct>
          <Description>{PN.convertEnToPe(item.desc)}</Description>
          <Pricewrapper>
            <Price className="price-label">
              {PN.convertEnToPe(item.price)}
            </Price>
          </Pricewrapper>
        </Details>
      </Container>
    </a>
  );
};

export default Product;

import PN from "persian-number";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
const Product = ({ item,product }) => {
  const [Product, setProduct] = useState(product);

// useEffect(()=>{
// console.log(Product.colors[0].images[0])
// },[Product]);




  return (
    <Link to={'/product/' + Product.id}>
      <Container>
        <ImageWrapper>
          {/* <Circle /> */}
        {Product.discount ?  <Discount>{PN.convertEnToPe(Product.discount)}</Discount> : null}
          <Image src={Product.colors[0].images[0]} />
        </ImageWrapper>
        <Details>
          <NameProduct>{Product.title}</NameProduct>
          <Description>{PN.convertEnToPe(Product.desc)}</Description>
          <Pricewrapper>
            <Price className="price-label">
              {PN.convertEnToPe(Product.price)}
            </Price>
          </Pricewrapper>
        </Details>
      </Container>
    </Link>
  );
};

export default Product;

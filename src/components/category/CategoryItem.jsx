import {Link, useLocation,} from 'react-router-dom';
import {Container,Image,Title} from './styles/categoryItemStyle';
const CategoryItem = ({ item }) => {
  
  return (
    <Link to={{pathname: 'category/'+item.categoryName,state:{var:'test'}}}>
    <Container>
      <Image src={item.img} />
      <Title>{item.title}</Title>
    </Container>
    </Link>
  );
};

export default CategoryItem;

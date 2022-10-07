import {Link} from 'react-router-dom';
import {Container,Image,Title} from './styles/categoryItemStyle';
const CategoryItem = ({ item }) => {
  return (
    <Link to={'category/'+item.categoryName}>
    <Container>
      <Image src={item.img} />
      <Title>{item.title}</Title>
    </Container>
    </Link>
  );
};

export default CategoryItem;

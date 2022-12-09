import {Link, useLocation,} from 'react-router-dom';
import useMobileMode from '../../hooks/useMobileMode';
import {Container,Image,Title} from './styles/categoryItemStyle';
const CategoryItem = ({ item }) => {
  const moibleMode = useMobileMode();
  return (
    <Container>
      <Link to={{pathname: 'category/'+item.categoryName,state:{var:'test'}}}>
      <Image src={item.img} />
      <Title>{item.title}</Title>
    </Link>
    </Container>
  );
};

export default CategoryItem;

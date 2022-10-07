import { useState } from "react";
import {Link} from "react-router-dom"
import { Header, Container, Menu,Links } from "./styles/navbar";

const Navbar = () => {
  const [mobileMode, setMobileMode] = useState(false);
  return (
    <Header>
      <Container>
        <Menu>
          <Links
            className="links"
            mobile={mobileMode}
            onClick={() => setMobileMode(false)}
          >
            <li>
             <Link to={'/category/news'}  >جدید ترین ها</Link> 
            </li>
            <li>
              <Link to={'/category/women'}>زنانه</Link>
            </li>
            <li>
              <Link to={'/category/men'}>مردانه</Link>
            </li>
          </Links>
        </Menu>
      </Container>
    </Header>
  );
};

export default Navbar;

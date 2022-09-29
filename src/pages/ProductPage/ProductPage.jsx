import { useState, useEffect } from "react";

import styled from "styled-components";
import { AddCircle, RemoveCircle, Favorite } from "@mui/icons-material";

import { NewProduct, popularProducts } from "../../data";
import { MobileMode } from "../../util/MobileMode";
import ProductSlider from "../../components/ProductSlider";
import CommentBox from "../../components/customCommentBox/CommentBox";
import DesktopWrapper from "./DesktopWrapper";
import MobileWrapper from "./MobileWrapper";

const Container = styled.div``;

const CommentWrapper = styled.div``;
const CommentContainer = styled.div`
  display: flex;
  justify-content: start;
`;

const SuggestWrapper = styled.div``;

const ProductPage = () => {
  const [data, setData] = useState(popularProducts[2]);
  const [amunt, setAmunt] = useState(1);
  const [mobileMode, setMobileMode] = useState(MobileMode);

  useEffect(() => {
    setMobileMode(MobileMode);
  }, MobileMode);

  const amuntHandler = (operation) => {
    if (operation == "-")
      setAmunt((perv) => {
        if (perv > 1) return perv - 1;
        else return 1;
      });
    else if (operation == "+") setAmunt((perv) => perv + 1);
  };

  console.log(data);

  return (
    <Container>
      {mobileMode ? (
        <MobileWrapper amunt={amunt} amuntHandler={amuntHandler} data={data} />
      ) : (
        <DesktopWrapper amunt={amunt} amuntHandler={amuntHandler} data={data} />
      )}

     
      <SuggestWrapper>
        <ProductSlider
          title={"برای شما"}
          ICON={Favorite}
          items={popularProducts}
        />
      </SuggestWrapper>
    </Container>
  );
};

export default ProductPage;


//<CommentWrapper>
{/* {data.comments && <ListComments comments={data.comments} />} */}
//<CommentBox comments={data.comments} />
//</CommentWrapper>
import styled from "styled-components";
import { mobile } from "../../../responsive";
export const Container = styled.div`
background-color: white;
display: flex;
flex-direction:column;
direction: rtl;
`;
export const Title = styled.h1`
margin: 0px 20px;
padding: 20px;
text-align: center;
`;
export const MainContainer = styled.div`
display: flex;
`;
export const ProductWrapper = styled.div`
flex: 9;
`;
export const SpinerWrapper = styled.div``;
export const FilterWrapper = styled.div`
display: ${(props)=>props.mobileMode ? 'none':''};
flex: 1;
padding: 30px;
margin: 2rem;
width: 180px;
min-width: 180px;

${mobile({ display: "none" })}
`;
export const FixedButtonWrapper = styled.div`
  display:${(props)=> !props.mobile ? "none" : "flex"} ;
  justifyContent: start;
  margin: 10px;
  position:sticky;
  top: auto;
  bottom: 80px;
  z-Index:4;
  width:fit-content;

`;
export const PaginationWrapper = styled.div`
direction: ltr;
display: flex;
justify-content: center;
margin: 10px 0;
${mobile({})}
`;
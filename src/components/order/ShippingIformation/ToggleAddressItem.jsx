import React, { useEffect } from "react";
import styled from "styled-components";
import  PN from "persian-number";
import { green, pink } from "@mui/material/colors";

const Container = styled.div`
  padding: 10px;

  border-radius: 10px;
  background-color: #f9fafb;


`;

const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16pt;
`;

const DeleteBtn = styled.span`
z-index:3 ;
&:hover{
    color:${pink[500]}
}
`;
const EditeBtn = styled.span`
&:hover {
    color:${green[500]}
}
`;
const WrapperInfo = styled.div`

`;

const Name = styled.span`
    width: 50%;
    text-align: right;
    font-size: 12px;
    display: inline-block;
    height: 24px;
    overflow: hidden;

`;

const Phone = styled.span`
    width: 50%;
    text-align: left;
    font-size: 12px;
    display: inline-block;
    height: 24px;
    overflow: hidden;
`;

const Address = styled.span`
    margin-bottom: 15px;
    font-size: 12px;
    line-height: 27px;
    white-space: wrap;
    display: inline-block;
    text-align: right;
    overflow: hidden;
    text-overflow: right;
`;

const PostCode = styled.span`
 width: 100%;
    text-align: right;
    font-size: 12px;
    display: inline-block;
    height: 24px;
    overflow: hidden;
    &:before{
        content: "کد پستی : "
    }
`;

const ToggleAddressItem = ({data,edite,index}) => {

  const editHandler = ()=>{
    edite('edit cklicked')
  }


  useEffect(() => {
// console.log(index)

  },[data])
  return (
    <Container>
      <WrapperHeader>
        <DeleteBtn className="remove-label" onClick={()=>console.log("Removing")}></DeleteBtn>
        <EditeBtn className="edite-label" onClick={editHandler} ></EditeBtn>
      </WrapperHeader>
      <WrapperInfo>
        <Name className="user-label">{data.name +" " + data.lastName}</Name>
        <Phone className="phone-label">.{PN.convertEnToPe(data.mobilePhone)}</Phone>
        <Address>{PN.convertEnToPe(data.postAddress)}</Address>
        <PostCode>{PN.convertEnToPe(data.postCode)}</PostCode>
      </WrapperInfo>
    </Container>
  );
};

export default ToggleAddressItem;

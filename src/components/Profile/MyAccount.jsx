import React from "react";
import PN from "persian-number";
import {
  ChangeBtn,
  Col,
  Container,
  Header,
  Row,
  Title,
  TitleRow,
  ValueRow,
  Wrapper,
} from "./styles/myAccountStyles";

const MyAccount = ({user,editSubmit}) => {

  const editHandler = ()=>{
    editSubmit(true)
  }
  return (
    <Container>
      <Header>
        <Title>اطلاعات فردی</Title>
        <ChangeBtn onClick={editHandler}>
          <span className="edit-label"></span>
          <span>تغییر اطلاعات</span>
        </ChangeBtn>
      </Header>
      <Wrapper>
        <Col>
          <Row>
            <TitleRow>نام و نام خانوادگی</TitleRow>
            <ValueRow>{user?.name|| "-"}</ValueRow>
          </Row>
          <Row>
            <TitleRow>شماره تلفن</TitleRow>
            <ValueRow>{user?.phone ||"-" }</ValueRow>
          </Row>
        </Col>
        <Col >
          <Row>
            <TitleRow>ایمیل</TitleRow>
            <ValueRow>{user?.email || "-"}</ValueRow>
          </Row>
          <Row>
            <TitleRow>تاریخ تولد</TitleRow>
            <ValueRow>{user?.birthDay? PN.convertEnToPe(user?.birthDay):'-'}</ValueRow>
          </Row>
        </Col>
       
      </Wrapper>
    </Container>
  );
};

export default MyAccount;

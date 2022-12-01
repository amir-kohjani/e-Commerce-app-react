import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import CustomDialog from '../CustomDialog/CustomDialog';
import LoginWrapper from '../LoginAndRegister/LoginWrapper';
import { Container,EmpetyWrapper,EmpetyIcon,Title,LoginButton } from './styles/wishListStyles'

const WishList = ({items=[],oClose,wishSubmit}) => {

  const [loginDialogFlag, setLoginDialogFlag] = useState(false);

  const user = useSelector((state) => state.user.user);


  const dialogLoginHandler = () => {
    setLoginDialogFlag((perv) => !perv);
    
  };
  if(!user.id){
    return(
      <>
    <Container>
          <EmpetyWrapper>
            <EmpetyIcon className="user-label" />
            <Title>لطفا ابتدا وارد حساب خود شوید!</Title>
          <LoginButton onClick={dialogLoginHandler} >ورود یا ثبت نام</LoginButton>
          </EmpetyWrapper>
        </Container>
         <CustomDialog
         open={loginDialogFlag}
         onClose={() => dialogLoginHandler()}
         >
         <LoginWrapper onClose={() => dialogLoginHandler()} />
       </CustomDialog>
         </>
    )
  }
if(items.length==0){
    return (
        <Container>
        <EmpetyWrapper>
          <EmpetyIcon className="heart-label" />
          <Title>لیست علاقه مندی های شما خالی میباشد!</Title>
        </EmpetyWrapper>
      </Container>
    )
}


  return (
    <div>WishListPage</div>
  )
}

export default WishList
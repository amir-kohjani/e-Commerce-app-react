import { pink } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ToggleAddressItem from "./ToggleAddressItem";
import CustomDialog from "../../CustomDialog/CustomDialog";
import AddAdressDialog from "./AddAdressDialog";
import useMobileMode from "../../../hooks/useMobileMode";


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
  background-color: #f9fafb;
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 12pt;
  font-weight: normal;
`;

const AddAddressBtn = styled.button`
  font-size: 14pt;
  color: ${pink[500]};
  border: none;
  background: none;
  display: flex;
  align-items: center;
  &:after {
    padding-right: 10px;
  }
  &:hover {
    color: ${pink[300]};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
`;

const Info = styled.p`
  padding: 10px;
  font-size: 10pt;
  color: gray;
`;

const toggleButtonGroupStyle = (mobile) => {
  const style = {
    padding: "10px",
    direction: "rtl",
    background: "none",
    overflowY: !mobile ? "" : "scroll",
    flexWrap: !mobile ? "wrap" : "noWrap",
    ".Mui-selected": {
      border: `2px solid ${pink[500]} !important`,
      background: "none !important",
    },
  };
  return style;
};
const toggleButtonStyle =()=>{
  
  const style ={
    flex:"1",
  width: "335px",
  minWidth: "250px",
  maxWidth: "350px",
  marginRight: "20px !important",
  marginTop: "20px !important",
  border: "none",
  borderRadius: "10px !important",
};
return style;
}
const AddressMethod = ({ address, submitIndex }) => {
  const [alignment, setAlignment] = useState("one");
  const [openDialog, setOpenDialog] = useState(false);
  const [addressinfo, setAddressInfo] = useState(address);
  const mobileMode = useMobileMode();
  const testArray = [];
  const openDialogHandler = () => {
    setOpenDialog(true);
  };

  const closeDialogHandler = () => {
    setOpenDialog(false);
  };
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    submitIndexHandler(newAlignment);
  };

  const submitIndexHandler = (newAlignment) => {
    submitIndex(newAlignment);
  };

  const addAddressHandler = ({ state }) => {
    addressinfo.push(state);
    closeDialogHandler();
  };

  const editAddressHandler = (indexAddress) => {};
  useEffect(() => {}, [addressinfo]);
  return (
    <Container>
      <CustomDialog open={openDialog} onClose={closeDialogHandler}>
        <AddAdressDialog onSubmit={addAddressHandler} />
      </CustomDialog>
      <Header>
        <Title>آدرس های شما</Title>
        <AddAddressBtn className="add-label" onClick={openDialogHandler}>
          افزودن آدرس
        </AddAddressBtn>
      </Header>

      <Wrapper>
        <Info>لطفا آدرس خود را انتخاب نمایید!</Info>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          sx={toggleButtonGroupStyle(mobileMode)}
        >
          {addressinfo &&
            addressinfo.map((adres, index) => {
              return (
                <ToggleButton
                  value={index}
                  size="small"
                  sx={toggleButtonStyle}
                  key={index}
                >
                  <ToggleAddressItem
                    data={adres}
                    key={index}
                    index={index}
                    edite={editAddressHandler}
                  />
                </ToggleButton>
              );
            })}
        </ToggleButtonGroup>
      </Wrapper>
    </Container>
  );
};

export default AddressMethod;

import React, { useEffect, useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import styled from "styled-components";

const Container = styled.div`
max-width: max-content;
min-width: fit-content;
position: absolute;
background:none;
`;

const CustomDialog = ({ onClose, open, title, children }) => {

  const [openDialog,setOpenDialog] = useState(open)

  return (
    <Container>
      <Dialog onClose={(e)=>onClose(e)} open={open} maxWidth='lg' >
      {title&&  <DialogTitle>{title}</DialogTitle>}
        {children}
      </Dialog>
    </Container>
  );
};

export default CustomDialog;

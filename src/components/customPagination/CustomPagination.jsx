import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PaginationItem } from "@mui/material";
import PN from "persian-number";
import useMobileMode from "../../hooks/useMobileMode";
const CustomPagination = ({
  COLOR = "#e94560",
  TEXTCOLOR = "#fff",
  count,
  curentPage,
  changePage,
}) => {
  const [color] = useState(COLOR);
  const [textColor] = useState(TEXTCOLOR);
  const mobileMode = useMobileMode();

  const changePageHandler = (page) => {
    changePage(page);
  };
  const Theme = createTheme({
    palette: {
      color: {
        main: color,
        contrastText: textColor,
      },
    },
  });
  return (
    <ThemeProvider theme={Theme}>
      <Pagination
        count={count > 1 ? count : 1}
        shape="rounded"
        size={mobileMode ? "medium" : "large"}
        color="color"
        page={curentPage}
        onChange={(e, value) => changePageHandler(value)}
        // renderItem={(item) => (
        //   <PaginationItem
        //   component={(props)=><button {...props}>{PN.convertEnToPe( item.page)}</button>} />
        // )}
      />
    </ThemeProvider>
  );
};

export default CustomPagination;

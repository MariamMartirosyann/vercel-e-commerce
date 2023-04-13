import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const overrides = {
  MuiAppBar:{root:{
    backgroundColor:"#44DBBD",
    
  }
 
  },}

export const theme = createTheme({
  ...overrides,
  palette: {
    primary: {
      main: "#44DBBD",
    },
    secondary: {
      main: "#000000",
      contrastText:"#fff"
    },
    error: red,
   
  },
});


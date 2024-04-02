import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "Arial", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#5C61BC",
    },
    secondary: {
      main: "#3F4281",
    },
  },
});

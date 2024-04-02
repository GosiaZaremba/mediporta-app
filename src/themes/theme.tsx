import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "Arial", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#3d82ab",
    },
    secondary: {
      main: "#003853",
    },
    info: { main: "#91d4c2" },
    success: { main: "#45bb89" },
  },
  //   components: {
  //     MuiTableCell: {
  //       styleOverrides: {
  //         root: {
  //           color: "white",
  //         },
  //       },
  //     },
  //   },
});

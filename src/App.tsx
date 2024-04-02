import React from "react";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./themes/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  );
};

export default App;

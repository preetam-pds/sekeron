
import React from 'react';
import { ThemeProvider } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";
import OverridedThemes from "./mui-themes/ThemeOverrides";

const App = () => {
  return (
    <ThemeProvider theme={OverridedThemes}>
      <AppRoutes />;
    </ThemeProvider>
  );
};

export default App;

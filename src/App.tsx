import { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

import Navigation from "./components/navigation/Navigation";
import ColorModeContext from "./context/ColorModeContext";
import Employee from "./components/Employee/Employee";

const App = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navigation>
            <Routes>
              <Route path="/" element={<Employee />} />
              <Route
                path="/dashboard"
                element={<Typography variant="h2">Good morning</Typography>}
              />
              <Route
                path="/mail"
                element={
                  <Typography variant="h2">Check your emails</Typography>
                }
              />
              <Route
                path="*"
                element={<Typography variant="h2">Page Not Found</Typography>}
              />
            </Routes>
          </Navigation>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;

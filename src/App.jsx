import Sidebar from "./components/Sidebar.jsx";
import Feed from "./components/Feed.jsx";
import Rightbar from "./components/Rightbar.jsx";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import Add from "./components/Add.jsx";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
    breakpoints: {
      values: {
        mobile: 0,
        desktop: 940,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box backgroundColor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar theme={theme} />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;

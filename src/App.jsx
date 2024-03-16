import { AppBar } from "@mui/material";
import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./Navbar/Navbar";
const theme = createTheme({
  typography: {
    fontFamily: "Nunito, sans-serif",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{
          width: "100%",
          height: "100px",
          bgcolor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar />
      </AppBar>
    </ThemeProvider>
  );
}

export default App;

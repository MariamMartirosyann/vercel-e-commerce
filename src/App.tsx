import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Routes from "./routes";
import { theme } from "./theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
     
    </>
  );
};

export default App;

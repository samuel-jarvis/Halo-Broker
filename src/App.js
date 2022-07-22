import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./globalStyles";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "dark" ? setMode("light") : setMode("dark");
    // window.localStorage.setItem('theme', theme)
  };

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    savedTheme && setTheme(savedTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Home themeToggler={themeToggler} />
    </ThemeProvider>
  );
}

export default App;

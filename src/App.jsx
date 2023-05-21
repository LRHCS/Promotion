import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Calc from "./components/Calc";
import themes from "./data/themes";
import ThemePage from "./components/ThemePage";
import NavBar from "./components/NavBar";

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

function App() {
  const [theme, setTheme] = useState("materialDark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme && themes[storedTheme]) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = (selectedTheme) => {
    if (themes[selectedTheme]) {
      setTheme(selectedTheme);
      localStorage.setItem("theme", selectedTheme);
    }
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <Container>
        <Routes>
          <Route exact path="/" element={<Calc />}></Route>
          <Route
            path="/theme"
            element={
              <ThemePage selectedTheme={theme} onThemeChange={toggleTheme} />
            }
          ></Route>
        </Routes>
        <NavBar />
      </Container>
    </ThemeProvider>
  );
}

export default App;
